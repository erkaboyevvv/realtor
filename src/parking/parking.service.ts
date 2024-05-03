import { Injectable } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importing PrismaService assuming it exists

@Injectable()
export class ParkingService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createParkingDto: CreateParkingDto) {
    return await this.prismaService.parking.create({
      data: createParkingDto,
    });
  }

  async findAll() {
    return await this.prismaService.parking.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.parking.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateParkingDto: UpdateParkingDto) {
    return await this.prismaService.parking.update({
      where: {
        id: id,
      },
      data: updateParkingDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.parking.delete({
      where: {
        id: id,
      },
    });
  }
}
