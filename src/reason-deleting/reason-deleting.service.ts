import { Injectable } from '@nestjs/common';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class ReasonDeletingService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return await this.prismaService.reasonDeleting.create({
      data: createReasonDeletingDto,
    });
  }

  async findAll() {
    return await this.prismaService.reasonDeleting.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.reasonDeleting.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return await this.prismaService.reasonDeleting.update({
      where: {
        id: id,
      },
      data: updateReasonDeletingDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.reasonDeleting.delete({
      where: {
        id: id,
      },
    });
  }
}
