import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apistatistics')
export class ApistatisticsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'url',
    default: '',
  })
  url: string;

  @Column({
    comment: '请求方法',
    default: '',
  })
  method: string;

  @Column({
    comment: '请求状态',
    default: 1,
  })
  status: number;

  @Column({
    comment: '创建时间',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: Date;
}
