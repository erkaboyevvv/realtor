import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class RegionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    return await this.prismaService.region.create({
      data: createRegionDto,
    });
  }

  async findAll() {
    return await this.prismaService.region.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.region.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return await this.prismaService.region.update({
      where: {
        id: id,
      },
      data: updateRegionDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.region.delete({
      where: {
        id: id,
      },
    });
  }
}
