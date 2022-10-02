import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @Inject('ROOM_REPOSITORY')
    private roomRepo: Repository<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepo.save(createRoomDto);
  }

  findAll(): Promise<Room[]> {
    return this.roomRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
