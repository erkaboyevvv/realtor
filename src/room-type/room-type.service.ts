import { Injectable } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class RoomTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRoomTypeDto: CreateRoomTypeDto) {
    return await this.prismaService.roomType.create({
      data: createRoomTypeDto,
    });
  }

  async findAll() {
    return await this.prismaService.roomType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.roomType.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return await this.prismaService.roomType.update({
      where: {
        id: id,
      },
      data: updateRoomTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.roomType.delete({
      where: {
        id: id,
      },
    });
  }
}
