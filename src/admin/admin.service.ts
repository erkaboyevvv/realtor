import {
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './admin.entity';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(createAdminDto: CreateAdminDto): Promise<Admin> {
    // Hardcoded logic for signup
    const { email, password } = createAdminDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.prismaService.admin.create({
      data: {
        email,
        hashedPassword,
      },
    });
    return newUser;
  }

  async signin(credentials: {
    email: string;
    password: string;
  }): Promise<{ accessToken: string }> {
    // Hardcoded logic for signin
    const { email, password } = credentials;
    const admin = await this.prismaService.admin.findUnique({
      where: { email },
    });
    if (!admin) {
      throw new BadRequestException('Invalid email or password');
    }
    const isValidPassword = await bcrypt.compare(
      password,
      admin.hashedPassword,
    );
    if (!isValidPassword) {
      throw new BadRequestException('Invalid email or password');
    }
    const accessToken = this.jwtService.sign({ sub: admin.id });
    return { accessToken };
  }

  async refresh(refreshToken: string): Promise<{ accessToken: string }> {
    // Hardcoded logic for refreshing token
    const adminId = 1; // Assuming there's only one admin for demo purpose
    const accessToken = this.jwtService.sign({ sub: adminId });
    return { accessToken };
  }

  async signout(refreshToken: string): Promise<void> {
    // Hardcoded logic for signout
    console.log('User signed out');
    return;
  }

  async findAll() {
    return await this.prismaService.admin.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.admin.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.prismaService.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.admin.delete({
      where: { id },
    });
  }

  async create(createAdminDto: CreateAdminDto) {
    return await this.prismaService.admin.create({
      data: createAdminDto,
    });
  }
}
