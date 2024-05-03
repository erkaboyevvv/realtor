import { Injectable } from '@nestjs/common';
import { CreateRelationshipTypeDto } from './dto/create-relationship-type.dto';
import { UpdateRelationshipTypeDto } from './dto/update-relationship-type.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class RelationshipTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRelationshipTypeDto: CreateRelationshipTypeDto) {
    return await this.prismaService.relationshipType.create({
      data: createRelationshipTypeDto,
    });
  }

  async findAll() {
    return await this.prismaService.relationshipType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.relationshipType.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateRelationshipTypeDto: UpdateRelationshipTypeDto,
  ) {
    return await this.prismaService.relationshipType.update({
      where: {
        id: id,
      },
      data: updateRelationshipTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.relationshipType.delete({
      where: {
        id: id,
      },
    });
  }
}
