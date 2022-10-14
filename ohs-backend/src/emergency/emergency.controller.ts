import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';

@Controller('emergency')
export class EmergencyController {
  constructor(private readonly emergencyService: EmergencyService) {}

  @Post('room/:roomId')
  create(
    @Param('roomId') roomId: string,
    @Body() createEmergencyDto: CreateEmergencyDto,
  ) {
    return this.emergencyService.create(+roomId);
  }
}
