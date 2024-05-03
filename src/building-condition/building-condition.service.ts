import { Injectable } from '@nestjs/common';
import { CreateBuildingConditionDto } from './dto/create-building-condition.dto';
import { UpdateBuildingConditionDto } from './dto/update-building-condition.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class BuildingConditionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBuildingConditionDto: CreateBuildingConditionDto) {
    return await this.prismaService.buildingCondition.create({
      data: createBuildingConditionDto,
    });
  }

  async findAll() {
    return await this.prismaService.buildingCondition.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.buildingCondition.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateBuildingConditionDto: UpdateBuildingConditionDto,
  ) {
    return await this.prismaService.buildingCondition.update({
      where: {
        id: id,
      },
      data: updateBuildingConditionDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.buildingCondition.delete({
      where: {
        id: id,
      },
    });
  }
}
