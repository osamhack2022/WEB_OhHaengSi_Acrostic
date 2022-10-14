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
import { ApiBasicAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CleaningService } from './cleaning.service';
import {
  CreateCleaningDto,
  CreateCleaningResponse,
  CreateRoomCleaningSchedDto,
} from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';
import { Cleaning } from './entities/cleaning.entity';

@Controller('cleaning')
export class CleaningController {
  constructor(private readonly cleaningService: CleaningService) {}

  @ApiBasicAuth()
  @ApiCreatedResponse({
    description: '청소구역이 성공적으로 생성되었습니다.',
    type: CreateCleaningResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCleaningDto: CreateCleaningDto) {
    return this.cleaningService.create(createCleaningDto);
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

  /**
   *
   * @param room 해당 생활관 ID
   * @param date YYYY-MM 형식으로
   * @returns
   */
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
