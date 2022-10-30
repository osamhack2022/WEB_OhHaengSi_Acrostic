import { PartialType } from '@nestjs/swagger';
import { CreateSoldierDto } from './create-soldier.dto';

export class UpdateSoldierDto extends PartialType(CreateSoldierDto) {}
