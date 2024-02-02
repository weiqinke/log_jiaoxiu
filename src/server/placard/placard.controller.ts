import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PlacardService } from './placard.service';

@Controller()
export class PlacardController {
  constructor(private readonly placardService: PlacardService) {}

  @GrpcMethod('PlacardService', 'UserPlacard')
  async UserPlacard(payload) {
    const data = await this.placardService.systemBroad(payload);
    return { code: 200, message: '查询成功', data };
  }

  @GrpcMethod('PlacardService')
  async FindPlacard(payload) {
    const data = await this.placardService.findPlacard(payload);
    return { code: 200, message: '查询成功', data };
  }

  // 查询
  @GrpcMethod('PlacardService')
  async Placard(payload) {
    await this.placardService.create(payload);
    return { code: 200, message: '创建成功' };
  }

  // 创建
  @GrpcMethod('PlacardService')
  async PlacardCreate(payload) {
    await this.placardService.create(payload);
    return { code: 200, message: '创建成功' };
  }

  // 更新
  @GrpcMethod('PlacardService')
  async PlacardUpdate(payload) {
    await this.placardService.placardUpdate(payload);
    return { code: 200, message: '更新成功' };
  }

  // 推送
  @GrpcMethod('PlacardService')
  async PlacardPush(payload) {
    await this.placardService.placardPush(payload);
    return { code: 200, message: '推送成功' };
  }

  // 确认收到
  @GrpcMethod('PlacardService')
  async PlacardSubmit(payload) {
    await this.placardService.placardSubmit(payload);
    return { code: 200, message: '确认成功' };
  }
}
