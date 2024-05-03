import { Module } from '@nestjs/common';
import { OwnerCoorparetionService } from './owner-coorparetion.service';
import { OwnerCoorparetionController } from './owner-coorparetion.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerCoorparetionController],
  providers: [OwnerCoorparetionService],
  exports: [OwnerCoorparetionService]
})
export class OwnerCoorparetionModule {}
