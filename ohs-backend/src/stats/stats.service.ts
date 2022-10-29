import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(
    @Inject('SOLDIER_REPOSITORY')
    private readonly soliderRepo: Repository<Soldier>,
  ) {}

  async getSoldierStatus() {
    const result = await this.soliderRepo
      .createQueryBuilder()
      .select('status')
      .addSelect('count(id)', 'count')
      .groupBy('status')
      .getRawMany<{ status: string; count: number }>();

    return result;
  }
}
