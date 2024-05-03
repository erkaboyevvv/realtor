import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService exists

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const createdAddress = await this.prismaService.address.create({
      data: createAddressDto,
    });
    return createdAddress;
  }

  async findAll() {
    const addresses = await this.prismaService.address.findMany();
    return addresses;
  }

  async findOne(id: number) {
    const address = await this.prismaService.address.findUnique({
      where: { id },
    });
    return address;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const updatedAddress = await this.prismaService.address.update({
      where: { id },
      data: updateAddressDto,
    });
    return updatedAddress;
  }

  async remove(id: number) {
    const deletedAddress = await this.prismaService.address.delete({
      where: { id },
    });
    return deletedAddress;
  }
}
