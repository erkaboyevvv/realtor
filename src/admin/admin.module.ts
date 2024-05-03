import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from '../common/strategies';

@Module({
  imports: [JwtModule.register({}), PrismaModule],
  controllers: [AdminController],
  providers: [AdminService, AccessTokenStrategy],
})
export class AdminModule {}
