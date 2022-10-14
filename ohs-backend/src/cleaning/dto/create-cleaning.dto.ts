import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Room } from 'src/room/entities/room.entity';

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

export class CreateCleaningResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  targetDate: string;

  @ApiProperty()
  inCharge: Room;

  @ApiProperty()
  inChargeId: number;
}
