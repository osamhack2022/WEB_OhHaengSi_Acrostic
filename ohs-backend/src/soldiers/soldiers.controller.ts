import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Soldier } from './entities/soldier.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@ApiTags('soldiers')
@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: Soldier,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSoldierDto: CreateSoldierDto) {
    return this.soldiersService.create(createSoldierDto);
  }

  @ApiOkResponse({
    type: [Soldier],
  })
  @Get()
  findAll() {
    return this.soldiersService.findAll();
  }

  @ApiOkResponse({
    type: Soldier,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldiersService.findOne(+id);
  }

  @ApiOkResponse({
    type: Soldier,
    description: '변경된 병사 정보',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldierDto: UpdateSoldierDto) {
    return this.soldiersService.update(+id, updateSoldierDto);
  }

  @ApiOkResponse({
    description: '삭제 완료',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldiersService.remove(+id);
  }
}
