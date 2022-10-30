import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';
import { fromEvent, Subject } from 'rxjs';
import { Room } from 'src/room/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';
import { Emergency } from './entities/emergency.entity';

@Injectable()
export class EmergencyService {
  private readonly emitter = new EventEmitter();

  constructor(
    @Inject('EMERGENCY_REPOSITORY')
    private readonly emergencyRepo: Repository<Emergency>,
    @Inject('ROOM_REPOSITORY')
    private readonly roomRepo: Repository<Room>,
  ) {}

  async create(roomId: number) {
    const room = await this.roomRepo.findOne({ where: { id: roomId } });
    this.emit('emergency', room);
    return await this.emergencyRepo.save({
      roomId,
    });
  }

  subscribe(channel: string) {
    return fromEvent(this.emitter, channel);
  }

  emit(channel: string, data?: object) {
    this.emitter.emit(channel, { data });
  }

  findAll() {
    return this.emergencyRepo.find({ relations: { room: true } });
  }
}
