import { Injectable } from '@nestjs/common';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class ObjectCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createObjectCategoryDto: CreateObjectCategoryDto) {
    return await this.prismaService.objectCategory.create({
      data: createObjectCategoryDto,
    });
  }

  async findAll() {
    return await this.prismaService.objectCategory.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.objectCategory.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto) {
    return await this.prismaService.objectCategory.update({
      where: {
        id: id,
      },
      data: updateObjectCategoryDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.objectCategory.delete({
      where: {
        id: id,
      },
    });
  }
}
