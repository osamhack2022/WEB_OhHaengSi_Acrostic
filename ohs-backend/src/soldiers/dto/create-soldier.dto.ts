import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateSoldierDto {
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장

  @IsNumberString()
  roomId: number;
}
