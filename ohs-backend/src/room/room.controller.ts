import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Room } from './entities/room.entity';

@ApiTags('room')
@Controller('room')
export class RoomController {
  private readonly logger = new Logger(RoomController.name);

  constructor(private readonly roomService: RoomService) {}

  @ApiCreatedResponse({ type: Room })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @ApiOkResponse({ type: [Room] })
  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @ApiOkResponse({ type: Room })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }
}
