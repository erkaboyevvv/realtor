import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerCoorparetionDto } from './create-owner-coorparetion.dto';

export class UpdateOwnerCoorparetionDto extends PartialType(CreateOwnerCoorparetionDto) {}
