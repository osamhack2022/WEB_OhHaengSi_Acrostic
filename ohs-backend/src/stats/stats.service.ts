import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Roster } from 'src/roster/entities/roster.entity';
import { Soldier } from 'src/soldiers/entities/soldier.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(
    @Inject('SOLDIER_REPOSITORY')
    private readonly soliderRepo: Repository<Soldier>,
    @Inject('ROSTER_REPOSITORY')
    private readonly rosterRepo: Repository<Roster>,
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

  async getWorkShare() {
    // select inChargeId, count(*), soldier.name as 'count'  from roster left JOIN soldier ON roster.inChargeId = soldier.id GROUP BY inChargeId
    const result = await this.rosterRepo
      .createQueryBuilder('roster')
      .select('count(*)', 'count')
      .leftJoinAndSelect('roster.inCharge', 'soldier')
      .where('roster.inChargeId IS NOT NULL')
      .groupBy('roster.inChargeId')
      .getRawMany();

    return result;
  }

  async getWorkShareByRank() {
    const result = await this.rosterRepo
      .createQueryBuilder('roster')
      .select('count(*)', 'count')
      .addSelect('soldier.rank')
      .leftJoin('roster.inCharge', 'soldier')
      .where('roster.inChargeId IS NOT NULL')
      .groupBy('soldier.rank')
      .getRawMany();

    return result;
  }
}
