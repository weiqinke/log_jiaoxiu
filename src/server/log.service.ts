import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as https from 'https';
import { catchError, lastValueFrom, map, of } from 'rxjs';
import { AccontLogEntity } from 'src/entitys/accontlog.entity';
import { DataSource } from 'typeorm';
// 在 axios 请求时，选择性忽略 SSL
const agent = new https.Agent({
  rejectUnauthorized: false,
});

@Injectable()
export class LogService {
  constructor(
    private readonly httpService: HttpService,

    private dataSource: DataSource,
  ) {}

  // 获取用户登录日志
  async getLoginLogs(payload): Promise<any> {
    const { st = new Date(), et = new Date() } = payload;
    const created = dayjs(st).format('YYYY-MM-DD 00:00:00');
    const etTime = dayjs(et).format('YYYY-MM-DD 23:59:59');
    const sqldata = await this.dataSource
      .getRepository(AccontLogEntity)
      .createQueryBuilder('log')
      .where('log.created >= :created', { created })
      .andWhere('log.created <= :etTime', { etTime })
      .getMany();
    return sqldata.map((item: AccontLogEntity) => ({
      id: item.id,
      uid: item.uid,
      name: item.name,
      os: item.os,
      client: item.client,
      bowser: item.bowser,
      host: item.host,
      country: item.country,
      city: item.city,
      created: item.created,
    }));
  }

  // 把系统中的用户归属地更新
  async updateAllIpAddrs(): Promise<any> {
    const sqldata = await this.dataSource
      .getRepository(AccontLogEntity)
      .createQueryBuilder('log')
      .where('log.status = :status', { status: '1' })
      .getMany();
    if (!sqldata.length) return;
    for (let i = 0; i < sqldata.length; i++) {
      const item = sqldata[i];
      if (item.ip) {
        setTimeout(() => {
          this.updateIPAddrd(item.ip, sqldata[i]);
        }, 2000 * i);
      }
    }
  }

  async updateIPAddrd(ip, log) {
    if (!ip) return;
    if (this.checkIsInsideIP(ip)) return;
    const result = await lastValueFrom(
      this.httpService
        .get(`https://api.vore.top/api/IPdata?ip=${ip}`, {
          httpsAgent: agent,
        })
        .pipe(
          map((res) => res.data),
          catchError(() => of({})),
        ),
    );
    if (result.code !== 200) return;
    const { ipdata = {}, ipinfo } = result?.data || {};
    const payload = {
      ...log,
      country: ipinfo?.cnip ? '中国' : ipdata?.info1 || ipdata.province,
      province: ipinfo?.cnip ? ipdata?.info1 || ipdata.province : ipdata.info2,
      city: ipinfo?.cnip
        ? ipdata?.info2 || ipdata.city
        : ipdata.info3 || ipdata.info2,
      district: ipinfo?.cnip
        ? ipdata?.info3 || ipdata.city
        : ipdata.info3 || ipdata.info2,
      isp: ipinfo?.isp || ipdata.isp,
      location: ipdata.location || '',
      status: '0',
    };

    this.dataSource
      .createQueryBuilder()
      .update(AccontLogEntity)
      .set(payload)
      .where('id = :id', { id: payload.id })
      .execute();
  }

  checkIsInsideIP(ip: string) {
    //检查是不是内部 IP
    //1.A类地址中:10.0.0.0到10.255.255.255.255
    //2.B类地址中:172.16.0.0到172.31.255.255
    //3.C类地址中:192.168.0.0到192.168.255.255
    if (ip == '127.0.0.1' || ip == 'localhost') {
      return true;
    }
    const aryIpAddress = ip.split('.');
    if (aryIpAddress[0] == '10') {
      return true;
    }
    if (aryIpAddress[0] == '192' && aryIpAddress[1] == '168') {
      return true;
    }
    if (aryIpAddress[0] == '172') {
      const num = parseInt(aryIpAddress[1]);
      if (num >= 16 && num <= 31) {
        return true;
      }
    }
    return false;
  }
}
