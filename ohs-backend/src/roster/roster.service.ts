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

  findOne(date: string) {
    return {
      date,
      rosters: [
        {
          name: '상황병',
          works: [
            {
              name: '지휘통제실',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
            {
              name: '지휘통제실',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
            {
              name: '지휘통제실',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
          ],
        },
        {
          name: '불침번',
          works: [
            {
              name: '22:00~00:00',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
            {
              name: '22:00~00:00',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
            {
              name: '22:00~00:00',
              memeber: [
                {
                  name: '박일병',
                  rank: 2,
                  rank_name: '일병',
                },
                {
                  name: '정상병',
                  rank: 3,
                  rank_name: '상병',
                },
              ],
            },
          ],
        },
      ],
    };
  }

  update(id: number, updateRosterDto: UpdateRosterDto) {
    return `This action updates a #${id} roster`;
  }

  remove(id: number) {
    return `This action removes a #${id} roster`;
  }
}
