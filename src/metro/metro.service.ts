import { Injectable } from '@nestjs/common';
import { CreateMetroDto } from './dto/create-metro.dto';
import { UpdateMetroDto } from './dto/update-metro.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class MetroService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMetroDto: CreateMetroDto) {
    return await this.prismaService.metro.create({
      data: createMetroDto,
    });
  }

  async findAll() {
    return await this.prismaService.metro.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.metro.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateMetroDto: UpdateMetroDto) {
    return await this.prismaService.metro.update({
      where: {
        id: id,
      },
      data: updateMetroDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.metro.delete({
      where: {
        id: id,
      },
    });
  }
}
