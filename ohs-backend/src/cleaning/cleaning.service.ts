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
    // TODO: targetDate 처리 해줘야함.
    return this.cleaningRepo.save({
      ...createCleaningDto,
      targetDate: '2022-10-01',
    });
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

    // 전체 스케줄
    let schedule: string[][] = [];

    for (const cleaningArea of cleaningAreas) {
      // 담당구역 주간 스케줄 처리
      let weekSchedule: string[] = [];

      // 맨 첫 항목은 해당 청소구역 명칭, 이후 주차별 담당 생활관
      weekSchedule.push(cleaningArea.name);

      // 현재 담당 중인 생활관 인덱스 찾기
      let curRoomIndex = rooms.findIndex(
        (room) => room.id == cleaningArea.inChargeId,
      );

      // 현재 담당 중인 생활관부터 인덱스 순으로 입력
      // 4주차(weeks)까지 처리
      for (let i = curRoomIndex; i < curRoomIndex + weeks; i++) {
        let inChargeRoom = rooms[i % rooms.length];
        weekSchedule.push(inChargeRoom.name);
      }
      schedule.push(weekSchedule);
    }

    return schedule;
  }

  async getRoomCleaningSchedule(room: number): Promise<string[][]> {
    const schedules = await this.roomCleaningSchedRepo.find({
      where: { roomId: room },
    });
    const combined = [];

    for (const sched of schedules) {
      combined.push([
        sched.name,
        sched.primaryFirst,
        sched.primarySecond,
        sched.primaryThird,
        sched.primaryFourth,
        sched.subFirst,
        sched.subSecond,
        sched.subThird,
        sched.subFourth,
      ]);
    }

    return combined;
  }

  async findOne(room: number, date: string) {
    return {
      room,
      date,
      byRoom: await this.getBarrackCleaningSchedule(),
      inRoom: await this.getRoomCleaningSchedule(room),
    };
  }

  async update(id: number, updateCleaningDto: UpdateCleaningDto) {
    await this.cleaningRepo.update(id, updateCleaningDto);
    return this.cleaningRepo.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} cleaning`;
  }
}
