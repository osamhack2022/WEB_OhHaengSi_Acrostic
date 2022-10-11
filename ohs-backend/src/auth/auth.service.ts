import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class AuthService {
  private readonly SALT_ROURDS = 10;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.init();
  }

  async init() {
    // create default admin account
    let user = await this.usersService.findOne('admin');
    if (user == null) {
      await this.createUser({
        username: this.configService.get<string>('DEFAULT_AMDIN_USERNAME'),
        password: this.configService.get<string>('DEFAULT_ADMIN_PASSWORD'),
        name: this.configService.get<string>('DEFAULT_ADMIN_NAME'),
        rank: this.configService.get<string>('DEFAULT_ADMIN_RANK'),
      });
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && bcrypt.compare(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async crypt(data: string): Promise<string> {
    return await bcrypt.hash(data, this.SALT_ROURDS);
  }

  async createUser(createUesrDTO: CreateUserDto) {
    createUesrDTO.password = await this.crypt(createUesrDTO.password);
    return await this.usersService.create(createUesrDTO);
  }

  async login(user: User) {
    const payload = { username: user.username, id: user.id };
    return {
      username: user.username,
      name: user.name,
      rank: user.rank,
      access_token: this.jwtService.sign(payload),
    };
  }
}
