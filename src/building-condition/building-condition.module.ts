import { Module } from '@nestjs/common';
import { BuildingConditionService } from './building-condition.service';
import { BuildingConditionController } from './building-condition.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BuildingConditionController],
  providers: [BuildingConditionService],
  exports: [BuildingConditionService]
})
export class BuildingConditionModule {}
