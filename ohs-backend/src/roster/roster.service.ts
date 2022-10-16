import { Inject, Injectable } from '@nestjs/common';
import rankToString from 'src/lib/helpers/rankToString';
import { Repository } from 'typeorm';
import { CreateRosterDto } from './dto/create-roster.dto';
import {
  IOrganizedRoster,
  IRosterResponse,
  IRosterWork,
  IWorkMember,
} from './dto/read-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';
import { Roster } from './entities/roster.entity';
import { RosterForm } from './entities/rosterForm.entity';

@Injectable()
export class RosterService {
  constructor(
    @Inject('ROSTER_REPOSITORY')
    private readonly rosterRepo: Repository<Roster>,
    @Inject('ROSTER_FORM_REPOSITORY')
    private readonly rosterFormRepo: Repository<RosterForm>,
  ) {}
  create(createRosterDto: CreateRosterDto) {
    return 'This action adds a new roster';
  }

  findAll() {
    return `This action returns all roster`;
  }

  getDummyForm(): RosterForm {
    return {
      id: 0,
      active: true,
      detail: [
        {
          name: '지휘통제실',
          works: [{ name: '00:00~08:00', requiredMember: 2 }],
        },
        {
          name: '위병소',
          works: [
            { name: '00:00~02:00', requiredMember: 2 },
            { name: '02:00~04:00', requiredMember: 1 },
            { name: '04:00~06:00', requiredMember: 3 },
          ],
        },
      ],
    };
  }

  async createRoster(targetDate: Date, formId?: number) {
    return await this.rosterRepo.manager.transaction(async (manager) => {
      let form: RosterForm = this.getDummyForm(); // TODO: change to real date

      // if (formId) {
      //   form = await manager.findOne(RosterForm, { where: { id: formId } });
      // } else {
      //   form = await manager.findOne(RosterForm, { where: { active: true } });
      // }

      let roster: Roster[] = [];
      for (const category of form.detail) {
        for (const work of category.works) {
          const newRoster = await manager.getRepository(Roster).save({
            categoryName: category.name,
            workName: work.name,
            requiredPeople: work.requiredMember,
            checked: false,
            targetDate,
          });

          roster.push(newRoster);
        }
      }

      return roster;
    });
  }

  async findOne(date: Date): Promise<IRosterResponse> {
    // date에 맞는 근무표 조회
    let rosters = await this.rosterRepo.find({
      where: { targetDate: date },
      relations: { inCharge: true },
    });

    if (rosters.length == 0) {
      rosters = await this.createRoster(date);
    }

    const categoryMap = new Map<string, Map<string, IWorkMember[]>>();

    // DB에 저장된 방식에서 응답문 방식으로 변경하기 위해 그룹핑
    for (const roster of rosters) {
      const category = categoryMap.get(roster.categoryName);
      const member: IWorkMember = roster.inCharge
        ? {
            rosterId: roster.id,
            name: roster.inCharge.name,
            rankName: rankToString(roster.inCharge.rank),
            checked: roster.checked,
          }
        : null;

      if (!category) {
        // 카테고리가 없으면 새로 생성
        categoryMap.set(
          roster.categoryName,
          new Map([[roster.workName, [member]]]),
        );
      } else if (!category.has(roster.workName)) {
        // 카테고리가 있으나 해당 근무가 없으면 생성
        category.set(roster.workName, [member]);
      } else {
        // 카테고리도 있고 해당 근무도 있음으로 인원만 추가
        category.get(roster.workName).push(member);
      }
    }

    const organizedRoster: IOrganizedRoster[] = [];
    for (const category of categoryMap.entries()) {
      const categoryName = category[0];
      const works = category[1];
      const organizedWorks: IRosterWork[] = [];

      for (const work of works) {
        const workName = work[0];
        const members = work[1];
        organizedWorks.push({
          name: workName,
          members,
        });
      }

      organizedRoster.push({
        name: categoryName,
        works: organizedWorks,
      });
    }

    // 해당 근무표 없으면 근무표 양식에서 새로 생성 (단, 담당자가 없을 수도)
    return {
      date: date.toISOString().slice(0, 10),
      roster: organizedRoster,
    };
  }

  async update(id: number, updateRosterDto: UpdateRosterDto) {
    await this.rosterRepo.update(id, updateRosterDto);
    return await this.rosterRepo.findOneBy({ id });
  }
}
