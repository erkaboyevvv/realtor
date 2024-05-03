import { Module } from '@nestjs/common';
import { BuildingSeriaService } from './building-seria.service';
import { BuildingSeriaController } from './building-seria.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BuildingSeriaController],
  providers: [BuildingSeriaService],
  exports: [BuildingSeriaService]
})
export class BuildingSeriaModule {}
