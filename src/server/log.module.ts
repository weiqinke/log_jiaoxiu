import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccontLogEntity } from 'src/entitys/accontlog.entity';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [AccontLogEntity],
      synchronize: true,
    }),
    HttpModule,
  ],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
