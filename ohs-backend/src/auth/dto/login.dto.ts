import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class LoginResponse {
  @ApiProperty()
  username: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  rank: string;
  @ApiProperty()
  access_token: string;
}
