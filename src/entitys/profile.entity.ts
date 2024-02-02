import * as dayjs from 'dayjs';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true,
    type: 'bigint',
  })
  uid: number;

  @Column({
    default: '',
    comment: '用户昵称',
  })
  nick: string;

  @Column({
    comment: '性别 0未知 1是男 2是女',
    default: 1,
  })
  sex: number;

  @Column({
    comment: '签名',
    default: '',
  })
  signature: string;

  @Column({
    comment: '职位名称',
    default: '',
  })
  title: string;

  @Column({
    comment: '头像地址',
    default: '',
  })
  avatar: string;

  @Column({
    comment: '分组',
    default: '',
  })
  group: string;

  @Column({
    comment: '地址',
    default: '',
  })
  address: string;

  @Column({
    comment: '注册时的IP',
    default: '',
  })
  sourceIP: string;

  @UpdateDateColumn({
    transformer: {
      from: (date: Date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
      },
      to: () => {
        return new Date();
      },
    },
  })
  updatedAt: string;

  @OneToOne(() => UserEntity, user => user.profile) // specify inverse side as a second parameter
  @JoinColumn()
  user: UserEntity;
}
