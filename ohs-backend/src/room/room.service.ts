import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SoldierStatus } from 'src/soldiers/entities/soldier.entity';
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

  async findOne(id: number) {
    const room = await this.roomRepo.findOne({
      where: { id },
      relations: {
        members: true,
      },
    });

    if (room == null) throw new NotFoundException();

    const total = room.members.length;
    const absence_reasons: [string, number][] = [
      ...room.members
        .filter((soldier) => soldier.status != SoldierStatus.PRESENCE)
        .reduce((acc, cur) => {
          let value = acc.get(cur.status);
          acc.set(cur.status, value ? value + 1 : 1);

          return acc;
        }, new Map<string, number>()),
    ];
    const absence = absence_reasons.reduce((acc, cur) => acc + cur[1], 0);

    return {
      room,
      summary: {
        total,
        absence,
        current: total - absence,
        absence_reasons,
      },
    };
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.roomRepo.update(id, updateRoomDto);
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
