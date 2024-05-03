import { Injectable } from '@nestjs/common';
import { CreateWallMaterialDto } from './dto/create-wall-material.dto';
import { UpdateWallMaterialDto } from './dto/update-wall-material.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importing PrismaService assuming it exists

@Injectable()
export class WallMaterialService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createWallMaterialDto: CreateWallMaterialDto) {
    return await this.prismaService.wallMaterial.create({
      data: createWallMaterialDto,
    });
  }

  async findAll() {
    return await this.prismaService.wallMaterial.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.wallMaterial.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateWallMaterialDto: UpdateWallMaterialDto) {
    return await this.prismaService.wallMaterial.update({
      where: {
        id: id,
      },
      data: updateWallMaterialDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.wallMaterial.delete({
      where: {
        id: id,
      },
    });
  }
}
