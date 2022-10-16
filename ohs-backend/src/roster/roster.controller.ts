import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { RosterService } from './roster.service';
import { CreateRosterDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('roster')
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
    if (!Date.parse(date)) {
      throw new BadRequestException(
        `${date} is not valid date format (yyyy-mm-dd)`,
      );
    }

    return this.rosterService.findOne(new Date(date));
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
