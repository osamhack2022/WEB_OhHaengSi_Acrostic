import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CleaningService } from './cleaning.service';
import {
  CreateCleaningDto,
  CreateRoomCleaningSchedDto,
} from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';

@Controller('cleaning')
export class CleaningController {
  constructor(private readonly cleaningService: CleaningService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCleaningDto: CreateCleaningDto) {
    return this.cleaningService.create(createCleaningDto);
  }

  @Get()
  findAll() {
    return this.cleaningService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('room/:id')
  createRoomSched(
    @Param('id', ParseIntPipe) roomId: number,
    @Body() createRoomCleaningSchedDto: CreateRoomCleaningSchedDto,
  ) {
    return this.cleaningService.createRoomSched(
      roomId,
      createRoomCleaningSchedDto,
    );
  }

  @Get('monthly')
  monthly() {
    return this.cleaningService.getBarrackCleaningSchedule();
  }

  @Get(':room/:date')
  findOne(
    @Param('room', ParseIntPipe) room: number,
    @Param('date') date: string,
  ) {
    return this.cleaningService.findOne(room, date);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCleaningDto: UpdateCleaningDto,
  ) {
    return this.cleaningService.update(+id, updateCleaningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cleaningService.remove(+id);
  }
}
