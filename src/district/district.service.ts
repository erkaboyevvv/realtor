import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class DistrictService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDistrictDto: CreateDistrictDto) {
    return await this.prismaService.district.create({
      data: createDistrictDto,
    });
  }

  async findAll() {
    return await this.prismaService.district.findMany({
      include: { region_id: true },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.district.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return await this.prismaService.district.update({
      where: {
        id: id,
      },
      data: updateDistrictDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.district.delete({
      where: {
        id: id,
      },
    });
  }
}
