import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accontlog')
export class AccontLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '账号信息',
    default: '',
  })
  name: string;

  @Column({
    comment: '账号唯一ID',
    default: '',
  })
  uid: string;

  @Column({
    comment: 'user os',
    default: '',
  })
  os: string;

  @Column({
    comment: 'client信息',
    default: '',
  })
  client: string;

  @Column({
    comment: 'bowser信息',
    default: '',
  })
  bowser: string;

  @Column({
    comment: '分析IP状态',
    default: '1',
  })
  status: string;

  @Column({
    comment: '归属地国家',
    default: '未知',
  })
  country: string;

  @Column({
    comment: '归属地省份',
    default: '未知',
  })
  province: string;

  @Column({
    comment: '归属地城市',
    default: '未知',
  })
  city: string;

  @Column({
    comment: '归属地区县',
    default: '未知',
  })
  district: string;

  @Column({
    comment: '归属地理位置',
    default: '0,0',
  })
  location: string;

  @Column({
    comment: '归属运营商',
    default: '未知',
  })
  isp: string;

  @Column({
    comment: 'ip信息',
    default: '0.0.0.0',
  })
  ip: string;

  @Column({
    comment: 'host信息',
    default: '',
  })
  host: string;

  @Column({
    comment: 'user-agent原始数据',
    default: '',
  })
  useragent: string;

  @Column({
    comment: '创建时间',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: Date;
}
