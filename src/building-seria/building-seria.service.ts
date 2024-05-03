import { Injectable } from '@nestjs/common';
import { CreateBuildingSeriaDto } from './dto/create-building-seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building-seria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BuildingSeriaService {

  constructor(private readonly prismaService: PrismaService) {
    
  }

  create(createBuildingSeriaDto: CreateBuildingSeriaDto) {
    return this.prismaService.building_seria.create({
      data: createBuildingSeriaDto
    })
  }

  findAll() {
    return this.prismaService.building_seria.find()
  }

  findOne(id: number) {
    return this.prismaService.building_seria.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateBuildingSeriaDto: UpdateBuildingSeriaDto) {
    return this.prismaService.building_seria.update({
      where: {
        id: id,
      },
      data: {
        name: updateBuildingSeriaDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.building_seria.delete({
      where: {
        id: id,
      },
    });
  }
}
