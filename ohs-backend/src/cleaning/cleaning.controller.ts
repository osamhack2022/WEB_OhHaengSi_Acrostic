import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CleaningService } from './cleaning.service';
import { CreateCleaningDto } from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';

@Controller('cleaning')
export class CleaningController {
  constructor(private readonly cleaningService: CleaningService) {}

  @Post()
  create(@Body() createCleaningDto: CreateCleaningDto) {
    return this.cleaningService.create(createCleaningDto);
  }

  @Get()
  findAll() {
    return this.cleaningService.findAll();
  }

  @Get(':room/:date')
  findOne(@Param('room') room: string, @Param('date') date: string) {
    return this.cleaningService.findOne(room, date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCleaningDto: UpdateCleaningDto) {
    return this.cleaningService.update(+id, updateCleaningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cleaningService.remove(+id);
  }
}
