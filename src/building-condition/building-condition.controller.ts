import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingConditionService } from './building-condition.service';
import { CreateBuildingConditionDto } from './dto/create-building-condition.dto';
import { UpdateBuildingConditionDto } from './dto/update-building-condition.dto';

@Controller('building-condition')
export class BuildingConditionController {
  constructor(private readonly buildingConditionService: BuildingConditionService) {}

  @Post()
  create(@Body() createBuildingConditionDto: CreateBuildingConditionDto) {
    return this.buildingConditionService.create(createBuildingConditionDto);
  }

  @Get()
  findAll() {
    return this.buildingConditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingConditionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingConditionDto: UpdateBuildingConditionDto) {
    return this.buildingConditionService.update(+id, updateBuildingConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingConditionService.remove(+id);
  }
}
