import { PartialType } from '@nestjs/swagger';
import { CreateRosterDto } from './create-roster.dto';

export class UpdateRosterDto extends PartialType(CreateRosterDto) {}
