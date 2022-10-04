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
    return this.roomRepo.find({
      relations: {
        members: true,
      },
    });
  }

  findOne(id: number) {
    return {
      room: {
        id,
      },
      members: [
        {
          name: '김병장',
          rank: 4,
          rank_name: '병장',
          status: '휴가',
        },
        {
          name: '박일병',
          rank: 2,
          rank_name: '일병',
          status: '열중',
        },
        {
          name: '정상병',
          rank: 3,
          rank_name: '상병',
          status: '기타',
        },
      ],
      summary: {
        total: 8,
        absence: 3,
        current: 5,
        absence_reasons: [
          ['휴가', 1],
          ['기타', 1],
          ['근무', 1],
        ],
      },
    };
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
