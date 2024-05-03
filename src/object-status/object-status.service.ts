import { Injectable } from '@nestjs/common';
import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class ObjectStatusService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createObjectStatusDto: CreateObjectStatusDto) {
    return await this.prismaService.objectStatus.create({
      data: createObjectStatusDto,
    });
  }

  async findAll() {
    return await this.prismaService.objectStatus.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.objectStatus.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateObjectStatusDto: UpdateObjectStatusDto) {
    return await this.prismaService.objectStatus.update({
      where: {
        id: id,
      },
      data: updateObjectStatusDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.objectStatus.delete({
      where: {
        id: id,
      },
    });
  }
}
