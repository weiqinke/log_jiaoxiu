import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
//消息表
@Entity('placard')
export class PlacardEntity {
  //自增键
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '消息id', default: '' })
  placardid: string;

  @Column({ comment: '发起者', default: '' })
  origin: string;

  @Column({ comment: '消息标题', default: '' })
  title: string;

  @Column({ comment: '消息类型', default: 'notification' })
  type: string;

  @Column({ comment: '消息主题', default: '' })
  description: string;

  @Column({
    comment: '消息状态',
    default: 'preparation', //'processing',
  })
  status: string;

  @Column({
    comment: '是否删除，0是未删除，1是已删除',
    select: false,
    default: 0,
  })
  deleted: number;

  @Column({ comment: '发布时间', default: '0' })
  broadcastime: string;

  @Column({
    comment: '创建时间',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: Date;

  @ManyToMany(() => UserEntity, user => user.uid)
  @JoinTable()
  users: UserEntity[];
}
