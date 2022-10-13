import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';
import { Emergency } from './entities/emergency.entity';

@Injectable()
export class EmergencyService {
  constructor(
    @Inject('EMERGENCY_REPOSITORY')
    private readonly emergencyRepo: Repository<Emergency>,
  ) {}

  create(roomId: number) {
    return this.emergencyRepo.save({
      roomId,
    });
  }

  findAll() {
    return `This action returns all emergency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emergency`;
  }

  update(id: number, updateEmergencyDto: UpdateEmergencyDto) {
    return `This action updates a #${id} emergency`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergency`;
  }
}
