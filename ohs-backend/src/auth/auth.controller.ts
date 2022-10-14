import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginRequest, LoginResponse } from './dto/login.dto';
import { JwtAuthGuard } from './jwt.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({
    description: '성공적으로 로그인 되었습니다.',
    type: LoginResponse,
  })
  @ApiUnauthorizedResponse({
    description: '아이디/비밀번호를 확인해주세요',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginRequest })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: '성공적으로 유저가 생성되었습니다.',
  })
  @UseGuards(JwtAuthGuard)
  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }
}
