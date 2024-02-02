import { AccontlogEntity } from '@/entitys/accontlog.entity';
import { NoticeEntity } from '@/entitys/notice.entity';
import { PlacardEntity } from '@/entitys/placard.entity';
import { ProfileEntity } from '@/entitys/profile.entity';
import { UserEntity } from '@/entitys/user.entity';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { NoticeController } from './notice/notice.controller';
import { NoticeService } from './notice/notice.service';
import { PlacardController } from './placard/placard.controller';
import { PlacardService } from './placard/placard.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: '12345678',
      database: 'test',
      entities: [AccontlogEntity, NoticeEntity, PlacardEntity, UserEntity, ProfileEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([AccontlogEntity, NoticeEntity, PlacardEntity, UserEntity, ProfileEntity]),
    HttpModule,
  ],
  controllers: [LogController, NoticeController, PlacardController],
  exports: [],
  providers: [LogService, NoticeService, PlacardService],
})
export class LogAndMessageModule {
  constructor() {}

  async onModuleInit() {}
}
