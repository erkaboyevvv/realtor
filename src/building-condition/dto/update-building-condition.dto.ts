import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingConditionDto } from './create-building-condition.dto';

export class UpdateBuildingConditionDto extends PartialType(CreateBuildingConditionDto) {}
