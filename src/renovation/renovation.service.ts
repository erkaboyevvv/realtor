import { Injectable } from '@nestjs/common';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class RenovationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRenovationDto: CreateRenovationDto) {
    return await this.prismaService.renovation.create({
      data: createRenovationDto,
    });
  }

  async findAll() {
    return await this.prismaService.renovation.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.renovation.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateRenovationDto: UpdateRenovationDto) {
    return await this.prismaService.renovation.update({
      where: {
        id: id,
      },
      data: updateRenovationDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.renovation.delete({
      where: {
        id: id,
      },
    });
  }
}
