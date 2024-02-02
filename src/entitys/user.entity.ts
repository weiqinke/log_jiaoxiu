import * as dayjs from 'dayjs';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PlacardEntity } from './placard.entity';
import { ProfileEntity } from './profile.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true,
    type: 'bigint',
  })
  uid: number;

  @Column({
    unique: true,
    nullable: true,
    comment: '用户名',
  })
  username: string;

  @Column({
    unique: true,
    nullable: true,
    comment: '邮箱',
  })
  email: string;

  @Column({
    unique: true,
    nullable: true,
    comment: '手机号',
  })
  mobile: string;

  @Column()
  password: string;

  @Column({
    default: false,
    comment: '是否禁用',
  })
  banned: boolean;

  @Column({
    comment: '是否回收',
    default: false,
  })
  recycle: boolean;

  @OneToOne(() => ProfileEntity, profile => profile.uid, {
    cascade: true,
  })
  @JoinColumn()
  profile: ProfileEntity;

  @CreateDateColumn({
    transformer: {
      from: (date: Date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
      },
      to: () => {
        return new Date();
      },
    },
  })
  createdAt: string;

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

  // @ManyToMany(() => RoleEntity, role => role.users)
  // roles: RoleEntity[];
  //PlacardEntity
  @ManyToMany(() => PlacardEntity, placards => placards.users)
  placard: PlacardEntity[];
}
