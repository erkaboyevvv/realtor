import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerCoorparetionService } from './owner-coorparetion.service';
import { CreateOwnerCoorparetionDto } from './dto/create-owner-coorparetion.dto';
import { UpdateOwnerCoorparetionDto } from './dto/update-owner-coorparetion.dto';

@Controller('owner-coorparetion')
export class OwnerCoorparetionController {
  constructor(private readonly ownerCoorparetionService: OwnerCoorparetionService) {}

  @Post()
  create(@Body() createOwnerCoorparetionDto: CreateOwnerCoorparetionDto) {
    return this.ownerCoorparetionService.create(createOwnerCoorparetionDto);
  }

  @Get()
  findAll() {
    return this.ownerCoorparetionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerCoorparetionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerCoorparetionDto: UpdateOwnerCoorparetionDto) {
    return this.ownerCoorparetionService.update(+id, updateOwnerCoorparetionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerCoorparetionService.remove(+id);
  }
}
