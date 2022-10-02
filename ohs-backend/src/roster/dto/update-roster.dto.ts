import { PartialType } from '@nestjs/mapped-types';
import { CreateRosterDto } from './create-roster.dto';

export class UpdateRosterDto extends PartialType(CreateRosterDto) {}
