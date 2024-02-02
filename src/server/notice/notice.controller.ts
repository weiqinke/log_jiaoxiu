import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { NoticeService } from './notice.service';

@Controller()
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @GrpcMethod('NoticeService')
  async UserNotice() {
    const data = await this.noticeService.userNotice();
    return { code: 200, message: '查询成功', data };
  }
}
