import { Injectable } from '@nestjs/common';
import { CreateOwnerRelationDto } from './dto/create-owner-relation.dto';
import { UpdateOwnerRelationDto } from './dto/update-owner-relation.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class OwnerRelationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOwnerRelationDto: CreateOwnerRelationDto) {
    const createdOwnerRelation = await this.prismaService.ownerRelation.create({
      data: createOwnerRelationDto,
    });
    return createdOwnerRelation;
  }

  async findAll() {
    const ownerRelations = await this.prismaService.ownerRelation.findMany();
    return ownerRelations;
  }

  async findOne(id: number) {
    const ownerRelation = await this.prismaService.ownerRelation.findUnique({
      where: { id },
    });
    return ownerRelation;
  }

  async update(id: number, updateOwnerRelationDto: UpdateOwnerRelationDto) {
    const updatedOwnerRelation = await this.prismaService.ownerRelation.update({
      where: { id },
      data: updateOwnerRelationDto,
    });
    return updatedOwnerRelation;
  }

  async remove(id: number) {
    const deletedOwnerRelation = await this.prismaService.ownerRelation.delete({
      where: { id },
    });
    return deletedOwnerRelation;
  }
}
