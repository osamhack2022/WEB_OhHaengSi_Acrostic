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
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateResult } from 'typeorm';
import { CleaningService } from './cleaning.service';
import {
  CreateCleaningDto,
  CreateCleaningResponse,
  CreateRoomCleaningSchedDto,
  RoomSchedResponse,
} from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';
import { RoomCleaningSched } from './entities/cleaning.entity';

@ApiTags('cleaning')
@Controller('cleaning')
export class CleaningController {
  constructor(private readonly cleaningService: CleaningService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: '청소구역이 성공적으로 생성되었습니다.',
    type: CreateCleaningResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCleaningDto: CreateCleaningDto) {
    return this.cleaningService.create(createCleaningDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: '생활관 청소 구역이 생성되었습니다.',
    type: RoomCleaningSched,
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: '생성될 구역의 생활관 ID',
  })
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

  @ApiOkResponse({
    description:
      '월간 청소 구역 목록. 각 배열의 첫 항목은 청소구역 명칭이고 이후 값들은 생활관 명',
    type: 'string[][]',
  })
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
  @ApiOkResponse({
    description: '요청 생활관의 해당 달 청소 스케쥴',
    type: RoomSchedResponse,
  })
  @ApiParam({
    name: 'date',
    type: 'string',
    description: 'YYYY-MM, 스케쥴의 년월',
  })
  @ApiParam({
    name: 'room',
    type: 'number',
    description: '스케쥴의 생활관 ID',
  })
  @Get(':room/:date')
  findOne(
    @Param('room', ParseIntPipe) room: number,
    @Param('date') date: string,
  ) {
    return this.cleaningService.findOne(room, date);
  }

  @ApiOkResponse({
    description: '정보가 변경되었습니다.',
    type: UpdateResult,
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: '해당 생활관 정보 변경',
  })
  @ApiBody({
    description: '변경될 내용',
    type: UpdateCleaningDto,
  })
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
