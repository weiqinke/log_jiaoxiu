import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//消息表
@Entity('notice')
export class NoticeEntity {
  //自增键
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '消息id',
  })
  noticeid: string;

  @Column({
    comment: '发起者',
  })
  origin: string;

  @Column({
    comment: '发起者uid',
    default: '',
  })
  originUid: string;

  @Column({
    comment: '接收者',
  })
  receiver: string;

  @Column({
    comment: '接收者uid',
    default: '',
  })
  receiverUid: string;

  @Column({
    comment: '消息标志图',
    default: '',
  })
  avatar: string;

  @Column({
    comment: '消息标题',
    default: '',
  })
  title: string;

  @Column({
    comment: '消息类型',
    default: 'notification',
  })
  type: string;

  @Column({
    comment: '消息主题',
    default: '',
  })
  description: string;

  @Column({
    comment: '消息状态',
    default: 'processing',
  })
  status: string;

  @Column({
    comment: '反馈状态',
    default: '',
  })
  extra: string;

  @Column({
    comment: '是否已读，0是未读，1是已读',
    select: false,
    default: 0,
  })
  read: number;

  @Column({
    comment: '是否删除，0是未删除，1是已删除',
    select: false,
    default: 0,
  })
  delete: number;

  @Column({
    comment: '创建时间',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: Date;
}
