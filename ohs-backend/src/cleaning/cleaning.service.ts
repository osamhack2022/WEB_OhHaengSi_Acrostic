import { Inject, Injectable } from '@nestjs/common';
import { Room } from 'src/room/entities/room.entity';
import { Repository } from 'typeorm';
import {
  CreateCleaningDto,
  CreateRoomCleaningSchedDto,
} from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';
import { Cleaning, RoomCleaningSched } from './entities/cleaning.entity';

@Injectable()
export class CleaningService {
  constructor(
    @Inject('CLEANING_REPOSITORY')
    private readonly cleaningRepo: Repository<Cleaning>,
    @Inject('ROOM_CLEANING_SCHED_REPOSITORY')
    private readonly roomCleaningSchedRepo: Repository<RoomCleaningSched>,
    @Inject('ROOM_REPOSITORY')
    private readonly roomRepo: Repository<Room>,
  ) {}

  create(createCleaningDto: CreateCleaningDto) {
    return this.cleaningRepo.save(createCleaningDto);
  }

  createRoomSched(
    roomId: number,
    createRoomCleaningSchedDto: CreateRoomCleaningSchedDto,
  ) {
    return this.roomCleaningSchedRepo.save({
      roomId,
      ...createRoomCleaningSchedDto,
    });
  }

  findAll() {
    return this.cleaningRepo.find();
  }

  async getBarrackCleaningSchedule(weeks = 4) {
    // 청소구역 목록
    let cleaningAreas = await this.cleaningRepo.find();

    // 생활관 목록
    let rooms = await this.roomRepo.find();

    let schedule = [];

    for (const cleaningArea of cleaningAreas) {
      let weekSchedule = [];
      weekSchedule.push(cleaningArea.name);

      // 기존 책임이었던 생활관부터 차례대로 삽입
      // 4주차(weeks)까지 처리
      let tmp = rooms.findIndex((room) => room.id == cleaningArea.inChargeId);
      for (let i = tmp; i < tmp + weeks; i++) {
        let inChargeRoom = rooms[i % rooms.length];
        weekSchedule.push(inChargeRoom.name);
      }
      schedule.push(weekSchedule);
    }

    return schedule;
  }

  async getRoomCleaningSchedule() {}

  async findOne(room: number, date: string) {
    return {
      room,
      date,
      byRoom: await this.getBarrackCleaningSchedule(),
      inRoom: await this.roomCleaningSchedRepo.find({
        where: { roomId: room },
      }),
    };
  }

  update(id: number, updateCleaningDto: UpdateCleaningDto) {
    return `This action updates a #${id} cleaning`;
  }

  remove(id: number) {
    return `This action removes a #${id} cleaning`;
  }
}
