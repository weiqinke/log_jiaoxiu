import { PlacardEntity } from '@/entitys/placard.entity';
import { UserEntity } from '@/entitys/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlacardService {
  constructor(
    @InjectRepository(PlacardEntity)
    private readonly placardRepo: Repository<PlacardEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findPlacard(payload) {
    return await this.placardRepo.find({
      where: payload,
      select: {
        users: true,
      },
    });
  }

  async create(payload) {
    await this.placardRepo.save(payload);
    return true;
  }

  async placardUpdate(payload) {
    const placard = await this.placardRepo.findOne({
      where: {
        id: payload.id,
      },
    });
    return await this.placardRepo.save({
      ...placard,
      ...payload,
    });
  }

  async placardPush(payload) {
    const placard = await this.placardRepo.findOne({
      where: {
        id: payload.id,
      },
    });
    if (!placard) return;
    const broadcastime = new Date().valueOf() + '';
    placard.status = 'broadcasting';
    placard.broadcastime = broadcastime;
    placard.users = [];
    return await this.placardRepo.save(placard);
  }

  async placardSubmit(payload) {
    console.log('payload: ', payload);
    const { id, uid } = payload;
    const placdard = await this.placardRepo.findOne({
      where: {
        id,
      },
      relations: {
        users: true,
      },
    });
    const user = await this.userRepo.findOne({ where: { uid } });

    if (placdard && user) {
      if (placdard.users.find(v => v.uid === user.uid)) return [];
      placdard.users.push(user);
      await this.placardRepo.save(placdard);
      return [];
    }
    return [];
  }

  async systemBroad({ uid, type, status }) {
    const result = await this.placardRepo.find({
      where: {
        type,
        status,
        deleted: 0,
      },
      relations: {
        users: true,
      },
    });
    if (!result) return;
    const user = await this.userRepo.findOne({ where: { uid } });
    if (!user) return;
    return result.filter(item => !item?.users?.find(u => u.uid === user.uid));
  }
}
