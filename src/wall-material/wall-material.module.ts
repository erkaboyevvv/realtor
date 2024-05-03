import { Module } from '@nestjs/common';
import { WallMaterialService } from './wall-material.service';
import { WallMaterialController } from './wall-material.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WallMaterialController],
  providers: [WallMaterialService],
  exports: [WallMaterialService]
})
export class WallMaterialModule {}
