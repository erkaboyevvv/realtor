import { Injectable } from '@nestjs/common';
import { CreateWaterSupplyDto } from './dto/create-water-supply.dto';
import { UpdateWaterSupplyDto } from './dto/update-water-supply.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class WaterSupplyService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createWaterSupplyDto: CreateWaterSupplyDto) {
    return await this.prismaService.waterSupply.create({
      data: createWaterSupplyDto,
    });
  }

  async findAll() {
    return await this.prismaService.waterSupply.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.waterSupply.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateWaterSupplyDto: UpdateWaterSupplyDto) {
    return await this.prismaService.waterSupply.update({
      where: {
        id: id,
      },
      data: updateWaterSupplyDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.waterSupply.delete({
      where: {
        id: id,
      },
    });
  }
}
