import { ApiProperty } from '@nestjs/swagger';

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
