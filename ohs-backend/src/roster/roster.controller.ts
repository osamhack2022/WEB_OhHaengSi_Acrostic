import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RosterService } from './roster.service';
import { CreateRosterDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';

@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @Post()
  create(@Body() createRosterDto: CreateRosterDto) {
    return this.rosterService.create(createRosterDto);
  }

  @Get()
  findAll() {
    return this.rosterService.findAll();
  }

  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.rosterService.findOne(date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRosterDto: UpdateRosterDto) {
    return this.rosterService.update(+id, updateRosterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rosterService.remove(+id);
  }
}