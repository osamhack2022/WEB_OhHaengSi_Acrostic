import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepo: Repository<User>
  ) {}

  async findOne(username: string): Promise<User | null> {
    return this.userRepo.findOne({
      where: {
        username
      }
    });
  }

  async create(createUesrDTO: CreateUserDto) {
    return this.userRepo.save(createUesrDTO);
  }
}