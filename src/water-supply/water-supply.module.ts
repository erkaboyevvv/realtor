import { Module } from '@nestjs/common';
import { WaterSupplyService } from './water-supply.service';
import { WaterSupplyController } from './water-supply.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WaterSupplyController],
  providers: [WaterSupplyService],
  exports: [WaterSupplyService]
})
export class WaterSupplyModule {}
