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
import { CreateRosterDto, CreateRosterFormDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';
import { ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IRosterResponse } from './dto/read-roster.dto';
import { Roster } from './entities/roster.entity';
import { RosterForm } from './entities/rosterForm.entity';

@ApiTags('roster')
@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @Post()
  create(@Body() createRosterDto: CreateRosterDto) {
    return this.rosterService.create(createRosterDto);
  }

  @ApiOkResponse({
    type: [RosterForm],
  })
  @Get('/form')
  getRosterForms() {
    return this.rosterService.getForms();
  }

  @Post('/form')
  createRosterForm(@Body() createRosterFormDto: CreateRosterFormDto) {
    return this.rosterService.createRosterForm(createRosterFormDto);
  }

  @Patch('/form/:id')
  updateRosterForm(
    @Param('id') id: string,
    @Body() body: Partial<CreateRosterFormDto>,
  ) {
    return this.rosterService.updateRosterForm(+id, body);
  }

  @ApiOkResponse({
    type: [RosterForm],
  })
  @Get('/form/:id')
  getRosterForm(@Param('id') id: string) {
    return this.rosterService.getForm(+id);
  }

  @ApiParam({
    name: 'date',
    description: 'YYYY-MM-dd',
  })
  @ApiOkResponse({
    type: IRosterResponse,
  })
  @Get(':date')
  findOne(@Param('date') date: string) {
    if (!Date.parse(date)) {
      throw new BadRequestException(
        `${date} is not valid date format (yyyy-mm-dd)`,
      );
    }

    return this.rosterService.findOne(new Date(date));
  }

  @ApiOkResponse({
    description: '변경된 결과',
    type: Roster,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRosterDto: UpdateRosterDto) {
    return this.rosterService.update(+id, updateRosterDto);
  }
}
