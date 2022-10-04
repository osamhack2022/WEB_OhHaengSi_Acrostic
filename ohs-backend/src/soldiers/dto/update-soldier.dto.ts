import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldierDto } from './create-soldier.dto';

export class UpdateSoldierDto extends PartialType(CreateSoldierDto) {}
