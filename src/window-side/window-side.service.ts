import { Injectable } from '@nestjs/common';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class WindowSideService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createWindowSideDto: CreateWindowSideDto) {
    return await this.prismaService.windowSide.create({
      data: createWindowSideDto,
    });
  }

  async findAll() {
    return await this.prismaService.windowSide.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.windowSide.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateWindowSideDto: UpdateWindowSideDto) {
    return await this.prismaService.windowSide.update({
      where: {
        id: id,
      },
      data: updateWindowSideDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.windowSide.delete({
      where: {
        id: id,
      },
    });
  }
}
