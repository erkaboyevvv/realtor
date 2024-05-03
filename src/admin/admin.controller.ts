import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './admin.entity';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('signup')
  async signup(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Post('signin')
  async signin(
    @Body() credentials: { email: string; password: string },
  ): Promise<{ accessToken: string }> {
    return this.adminService.signin(credentials);
  }

  @Post('refresh')
  async refresh(
    @Body() refreshToken: string,
  ): Promise<{ accessToken: string }> {
    return this.adminService.refreshToken(refreshToken);
  }

  @Post('signout')
  async signout(
    @Body() refreshToken: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.adminService.signout(refreshToken, res);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<Admin> {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.adminService.remove(+id);
  }
}
