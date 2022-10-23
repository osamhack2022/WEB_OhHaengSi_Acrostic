import { ApiProperty } from '@nestjs/swagger';
import { IRosterForm } from '../entities/rosterForm.entity';

export class CreateRosterDto {
  @ApiProperty()
  categoryName: string;
  @ApiProperty()
  workName: string;
  @ApiProperty()
  targetDate: Date;
  @ApiProperty()
  checked: boolean;
  @ApiProperty()
  requiredPeople: number;
  @ApiProperty()
  inChargeId: number;
}

export class CreateRosterFormDto {
  id: number;
  name: string;
  detail: IRosterForm[];
  active?: boolean = false;
}
