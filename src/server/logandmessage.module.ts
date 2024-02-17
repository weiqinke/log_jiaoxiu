import { AccontlogEntity } from '@/entitys/accontlog.entity';
import { ApistatisticsEntity } from '@/entitys/apistatistics.entity';
import { NoticeEntity } from '@/entitys/notice.entity';
import { PlacardEntity } from '@/entitys/placard.entity';
import { ProfileEntity } from '@/entitys/profile.entity';
import { UserEntity } from '@/entitys/user.entity';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { NoticeController } from './notice/notice.controller';
import { NoticeService } from './notice/notice.service';
import { PlacardController } from './placard/placard.controller';
import { PlacardService } from './placard/placard.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      // 自定义.env文件路径（默认为根路径的 .env 文件），如果有多个，可以传递数组
      envFilePath: '.mysql.env',
      // 控制是否不解析.env文件，只使用运行时注入的环境变量
      ignoreEnvFile: false,
      // 是否是全局模块
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_host,
      port: parseInt(process.env.DATABASE_database),
      username: process.env.DATABASE_username,
      password: process.env.DATABASE_password,
      database: process.env.DATABASE_database,
      entities: [AccontlogEntity, NoticeEntity, PlacardEntity, UserEntity, ProfileEntity, ApistatisticsEntity],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([AccontlogEntity, NoticeEntity, PlacardEntity, UserEntity, ProfileEntity, ApistatisticsEntity]),
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
