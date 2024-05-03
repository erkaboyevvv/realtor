import { Injectable } from '@nestjs/common';
import { CreateResidentTypeDto } from './dto/create-resident-type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident-type.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class ResidentTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createResidentTypeDto: CreateResidentTypeDto) {
    return await this.prismaService.residentType.create({
      data: createResidentTypeDto,
    });
  }

  async findAll() {
    return await this.prismaService.residentType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.residentType.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateResidentTypeDto: UpdateResidentTypeDto) {
    return await this.prismaService.residentType.update({
      where: {
        id: id,
      },
      data: updateResidentTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.residentType.delete({
      where: {
        id: id,
      },
    });
  }
}
