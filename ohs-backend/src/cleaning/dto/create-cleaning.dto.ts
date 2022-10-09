import { IsNumber, IsString } from 'class-validator';

export class CreateCleaningDto {
  @IsString()
  name: string;

  @IsNumber()
  inChargeId: number;
}

export class CreateRoomCleaningSchedDto {
  @IsString()
  name: string;
}
