import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { SoldierStatus } from '../entities/soldier.entity';

export class CreateSoldierDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장

  @IsNumber()
  roomId: number;

  @IsEnum(SoldierStatus)
  @IsOptional()
  status: SoldierStatus = SoldierStatus.PRESENCE;
}
