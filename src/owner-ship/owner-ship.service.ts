import { Injectable } from '@nestjs/common';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class OwnerShipService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOwnerShipDto: CreateOwnerShipDto) {
    return await this.prismaService.ownership.create({
      data: createOwnerShipDto,
    });
  }

  async findAll() {
    return await this.prismaService.ownership.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.ownership.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateOwnerShipDto: UpdateOwnerShipDto) {
    return await this.prismaService.ownership.update({
      where: {
        id: id,
      },
      data: updateOwnerShipDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.ownership.delete({
      where: {
        id: id,
      },
    });
  }
}
