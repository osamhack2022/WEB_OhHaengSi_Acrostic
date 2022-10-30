import { ApiProperty } from '@nestjs/swagger';
import { Soldier } from 'src/soldiers/entities/soldier.entity';

export class IWorkMember {
  @ApiProperty()
  id: number;

  @ApiProperty()
  rosterId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  rankName: string;

  @ApiProperty()
  checked: boolean;
}

export class IRosterWork {
  @ApiProperty()
  name: string;

  @ApiProperty({
    type: [IWorkMember],
  })
  members: IWorkMember[];
}

export class IOrganizedRoster {
  @ApiProperty()
  name: string;

  @ApiProperty({
    type: () => [IRosterWork],
  })
  works: IRosterWork[];
}

export class IRosterResponse {
  @ApiProperty()
  date: string;

  @ApiProperty({
    type: () => [IOrganizedRoster],
  })
  roster: IOrganizedRoster[];
}
