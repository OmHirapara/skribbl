import { PartialType } from '@nestjs/mapped-types';
import { CreateSkribblDto } from './create-skribbl.dto';

export class UpdateSkribblDto extends PartialType(CreateSkribblDto) {}
