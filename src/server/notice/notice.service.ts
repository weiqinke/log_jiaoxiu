import { NoticeEntity } from '@/entitys/notice.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(NoticeEntity)
    private readonly noticeRepo: Repository<NoticeEntity>,
  ) {}

  async userNotice() {
    return await this.noticeRepo.find({
      where: {
        delete: 0,
      },
    });
  }
}
