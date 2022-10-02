import { Injectable } from '@nestjs/common';
import { CreateRosterDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';

@Injectable()
export class RosterService {
  create(createRosterDto: CreateRosterDto) {
    return 'This action adds a new roster';
  }

  findAll() {
    return `This action returns all roster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roster`;
  }

  update(id: number, updateRosterDto: UpdateRosterDto) {
    return `This action updates a #${id} roster`;
  }

  remove(id: number) {
    return `This action removes a #${id} roster`;
  }
}
