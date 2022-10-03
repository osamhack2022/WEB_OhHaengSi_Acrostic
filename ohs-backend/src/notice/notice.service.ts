import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Injectable()
export class NoticeService {
  create(createNoticeDto: CreateNoticeDto) {
    return 'This action adds a new notice';
  }

  findAll(query: any = "") {
    return {
      query,
      items: [
        {
          type: 'notice',
          title: '[지휘통제실] 막사 내 보안 규정 안내',
          content: `제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
    
          모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.`,
          writer: {
            name: '행정보급관'
          },
          createdAt: '2022-10-10 10:01:23'
        },
        {
          type: 'normal',
          title: '[지휘통제실] 막사 내 보안 규정 안내',
          content: `제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
    
          모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.`,
          writer: {
            name: '행정보급관'
          },
          createdAt: '2022-10-10 10:01:23'
        }
      ]
    };
  }

  findOne(id: number) {
    return {
      type: 'normal',
      title: '[지휘통제실] 막사 내 보안 규정 안내',
      content: `제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.

      모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.`,
      writer: {
        name: '행정보급관'
      },
      createdAt: '2022-10-10 10:01:23'
    };
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return `This action updates a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
