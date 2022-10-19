import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Notice } from './entities/notice.entity';

@ApiTags('notice')
@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: Notice,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createNoticeDto: CreateNoticeDto, @Req() req: Request) {
    return this.noticeService.create(createNoticeDto, req.user.id);
  }

  @ApiOkResponse({
    type: [Notice],
  })
  @Get()
  findAll(@Query() query: any) {
    return this.noticeService.findAll(query);
  }

  @ApiOkResponse({
    type: Notice,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeService.findOne(+id);
  }

  @ApiOkResponse({
    type: Notice,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticeDto: UpdateNoticeDto) {
    return this.noticeService.update(+id, updateNoticeDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticeService.remove(+id);
  }
}
