import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { Soldier } from './entities/soldier.entity';

@Injectable()
export class SoldiersService {
  constructor(
    @Inject('SOLDIER_REPOSITORY')
    private readonly soliderRepo: Repository<Soldier>,
  ) {}

  create(createSoldierDto: CreateSoldierDto) {
    return this.soliderRepo.save(createSoldierDto);
  }

  findAll() {
    return this.soliderRepo.find({
      relations: {
        room: true,
      },
    });
  }

  findOne(id: number) {
    return this.soliderRepo.findOne({ where: { id } });
  }

  async update(id: number, updateSoldierDto: UpdateSoldierDto) {
    await this.soliderRepo.update({ id }, updateSoldierDto);
    return await this.soliderRepo.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.soliderRepo.delete({ id });
  }
}
