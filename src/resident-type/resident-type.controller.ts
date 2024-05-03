import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResidentTypeService } from './resident-type.service';
import { CreateResidentTypeDto } from './dto/create-resident-type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident-type.dto';

@Controller('resident-type')
export class ResidentTypeController {
  constructor(private readonly residentTypeService: ResidentTypeService) {}

  @Post()
  create(@Body() createResidentTypeDto: CreateResidentTypeDto) {
    return this.residentTypeService.create(createResidentTypeDto);
  }

  @Get()
  findAll() {
    return this.residentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.residentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResidentTypeDto: UpdateResidentTypeDto) {
    return this.residentTypeService.update(+id, updateResidentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.residentTypeService.remove(+id);
  }
}
