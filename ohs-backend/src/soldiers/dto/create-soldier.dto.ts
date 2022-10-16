import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장

  @ApiProperty()
  @IsNumber()
  roomId: number;

  @ApiProperty()
  @IsEnum(SoldierStatus)
  @IsOptional()
  status: SoldierStatus = SoldierStatus.PRESENCE;
}
