import { Injectable } from '@nestjs/common';
import { CreateOverlapDto } from './dto/create-overlap.dto';
import { UpdateOverlapDto } from './dto/update-overlap.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class OverlapsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOverlapDto: CreateOverlapDto) {
    return await this.prismaService.overlaps.create({
      data: createOverlapDto,
    });
  }

  async findAll() {
    return await this.prismaService.overlaps.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.overlaps.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateOverlapDto: UpdateOverlapDto) {
    return await this.prismaService.overlaps.update({
      where: {
        id: id,
      },
      data: updateOverlapDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.overlaps.delete({
      where: {
        id: id,
      },
    });
  }
}
