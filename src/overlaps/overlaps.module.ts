import { Module } from '@nestjs/common';
import { OverlapsService } from './overlaps.service';
import { OverlapsController } from './overlaps.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OverlapsController],
  providers: [OverlapsService],
  exports: [OverlapsService]
})
export class OverlapsModule {}
