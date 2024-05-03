import { Injectable } from '@nestjs/common';
import { CreateHeatingSystemDto } from './dto/create-heating-system.dto';
import { UpdateHeatingSystemDto } from './dto/update-heating-system.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class HeatingSystemService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createHeatingSystemDto: CreateHeatingSystemDto) {
    return await this.prismaService.heatingSystem.create({
      data: createHeatingSystemDto,
    });
  }

  async findAll() {
    return await this.prismaService.heatingSystem.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.heatingSystem.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateHeatingSystemDto: UpdateHeatingSystemDto) {
    return await this.prismaService.heatingSystem.update({
      where: {
        id: id,
      },
      data: updateHeatingSystemDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.heatingSystem.delete({
      where: {
        id: id,
      },
    });
  }
}
