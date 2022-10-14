import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Room } from 'src/room/entities/room.entity';
import { RoomCleaningSched } from '../entities/cleaning.entity';

export class CreateCleaningDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  inChargeId: number;
}

export class CreateRoomCleaningSchedDto {
  @ApiProperty()
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

export class RoomSchedResponse {
  @ApiProperty()
  room: number;

  @ApiProperty()
  date: string;

  @ApiProperty()
  byRoom: string[][];

  @ApiProperty()
  inRoom: RoomCleaningSched[];
}
