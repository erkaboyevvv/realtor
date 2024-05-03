import { Injectable } from '@nestjs/common';
import { CreateOwnerCoorparetionDto } from './dto/create-owner-coorparetion.dto';
import { UpdateOwnerCoorparetionDto } from './dto/update-owner-coorparetion.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class OwnerCoorparetionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOwnerCoorparetionDto: CreateOwnerCoorparetionDto) {
    return await this.prismaService.ownerCoorperation.create({
      data: createOwnerCoorparetionDto,
    });
  }

  async findAll() {
    return await this.prismaService.ownerCoorperation.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.ownerCoorperation.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateOwnerCoorparetionDto: UpdateOwnerCoorparetionDto) {
    return await this.prismaService.ownerCoorperation.update({
      where: {
        id: id,
      },
      data: updateOwnerCoorparetionDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.ownerCoorperation.delete({
      where: {
        id: id,
      },
    });
  }
}
