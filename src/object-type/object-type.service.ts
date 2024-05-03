import { Injectable } from '@nestjs/common';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createObjectTypeDto: CreateObjectTypeDto) {
    return await this.prismaService.objectType.create({
      data: createObjectTypeDto,
    });
  }

  async findAll() {
    return await this.prismaService.objectType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.objectType.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return await this.prismaService.objectType.update({
      where: {
        id: id,
      },
      data: updateObjectTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.objectType.delete({
      where: {
        id: id,
      },
    });
  }
}
