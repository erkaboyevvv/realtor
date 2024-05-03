import { Injectable } from '@nestjs/common';
import { CreateRealtorDto } from './dto/create-realtor.dto';
import { UpdateRealtorDto } from './dto/update-realtor.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class RealtorService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new realtor
  async create(createRealtorDto: CreateRealtorDto) {
    return await this.prismaService.realtor.create({
      data: createRealtorDto,
    });
  }

  // Retrieve all realtors
  async findAll() {
    return await this.prismaService.realtor.findMany({
      include: { firma_id: true },
    });
  }

  // Retrieve a specific realtor by ID
  async findOne(id: number) {
    return await this.prismaService.realtor.findUnique({
      where: {
        id: id,
      },
    });
  }

  // Update a realtor by ID
  async update(id: number, updateRealtorDto: UpdateRealtorDto) {
    return await this.prismaService.realtor.update({
      where: {
        id: id,
      },
      data: updateRealtorDto,
    });
  }

  // Remove a realtor by ID
  async remove(id: number) {
    return await this.prismaService.realtor.delete({
      where: {
        id: id,
      },
    });
  }
}
