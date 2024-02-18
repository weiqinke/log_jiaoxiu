import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { LogService } from './log.service';

@Controller()
export class LogController {
  constructor(private readonly logService: LogService) {}
  // 如下两个参数都是对应proto文件的内容，两个都可以省略，nestjs会自动转换名字大小写去匹配
  @GrpcMethod('LogService')
  async GetLoginLogs(payload): Promise<any> {
    const data = await this.logService.getLoginLogs(payload);
    return { code: 200, message: '', data };
  }
  @GrpcMethod('LogService')
  async UpdateAllIpAddrs(): Promise<any> {
    this.logService.updateAllIpAddrs();
    return { code: 200, message: '正在更新中' };
  }
  @GrpcMethod('LogService')
  async SaveLoginLog(payload: any): Promise<any> {
    await this.logService.saveLoginLog(payload);
    return { code: 200, message: '操作成功' };
  }
  @GrpcMethod('LogService')
  async SaveApistatistics(payload: any): Promise<any> {
    await this.logService.saveApistatistics(payload);
    return { code: 200, message: '操作成功' };
  }

  @GrpcMethod('LogService')
  async Apistatistics(payload: any): Promise<any> {
    const data = await this.logService.apistatistics(payload);
    return { code: 200, message: '操作成功', data };
  }

  @GrpcMethod('LogService')
  async ApiCount(payload: any): Promise<any> {
    const data = await this.logService.apiCount(payload);
    return { code: 200, message: '操作成功', data };
  }
}
