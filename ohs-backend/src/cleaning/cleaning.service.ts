import { Injectable } from '@nestjs/common';
import { CreateCleaningDto } from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';

@Injectable()
export class CleaningService {
  create(createCleaningDto: CreateCleaningDto) {
    return 'This action adds a new cleaning';
  }

  findAll() {
    return `This action returns all cleaning`;
  }

  findOne(room: string, date: string) {
    return {
      room,
      date,
      byRoom: [
        ['청소구역1', 1, 2, 3, 4],
        ['청소구역2', 1, 2, 3, 4],
        ['청소구역3', 1, 2, 3, 4],
        ['청소구역4', 1, 2, 3, 4],
        ['청소구역5', 1, 2, 3, 4],
      ],
      inRoom: [
        ['청소구역1', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역2', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역3', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역4', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역5', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역6', '김일병', '박이병', '이상병', '진병장'],
        ['청소구역7', '김일병', '박이병', '이상병', '진병장'],
      ],
    };
  }

  update(id: number, updateCleaningDto: UpdateCleaningDto) {
    return `This action updates a #${id} cleaning`;
  }

  remove(id: number) {
    return `This action removes a #${id} cleaning`;
  }
}
