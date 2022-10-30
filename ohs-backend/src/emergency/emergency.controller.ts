import { Controller, Post, Param, Sse, Get, Header } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Subject, Observable, filter, map, interval } from 'rxjs';

@ApiTags('emergency')
@Controller('emergency')
export class EmergencyController {
  constructor(private readonly emergencyService: EmergencyService) {}

  @ApiParam({
    name: 'roomId',
    description: '긴급 상황인 생활관 ID',
  })
  @ApiCreatedResponse({
    description: '긴급 상황 전달 성공',
  })
  @Post('room/:roomId')
  create(@Param('roomId') roomId: string) {
    return this.emergencyService.create(+roomId);
  }

  @Sse('sse')
  sse(): Observable<any> {
    return this.emergencyService.subscribe('emergency');
  }

  @Get()
  getEmergencies() {
    return this.emergencyService.findAll();
  }
}
