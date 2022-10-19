import { Controller, Post, Param } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';

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
}
