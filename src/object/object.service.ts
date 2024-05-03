import { Injectable } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createObjectDto: CreateObjectDto) {
    const createdObject = await this.prismaService.object.create({
      data: createObjectDto,
    });
    return createdObject;
  }

  async findAll() {
    const objects = await this.prismaService.object.findMany();
    return objects;
  }

  async findOne(id: number) {
    const object = await this.prismaService.object.findUnique({
      where: { id },
    });
    return object;
  }

  async update(id: number, updateObjectDto: UpdateObjectDto) {
    const updatedObject = await this.prismaService.object.update({
      where: { id },
      data: updateObjectDto,
    });
    return updatedObject;
  }

  async remove(id: number) {
    const deletedObject = await this.prismaService.object.delete({
      where: { id },
    });
    return deletedObject;
  }
}
