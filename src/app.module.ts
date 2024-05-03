import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidentTypeModule } from './resident-type/resident-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';
import { ObjectStatusModule } from './object-status/object-status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenovationModule } from './renovation/renovation.module';
import { WindowSideModule } from './window-side/window-side.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { OwnerShipModule } from './owner-ship/owner-ship.module';
import { ReasonDeletingModule } from './reason-deleting/reason-deleting.module';
import { OwnerCoorparetionModule } from './owner-coorparetion/owner-coorparetion.module';
import { RelationshipTypeModule } from './relationship-type/relationship-type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { MetroModule } from './metro/metro.module';
import { WallMaterialModule } from './wall-material/wall-material.module';
import { OverlapsModule } from './overlaps/overlaps.module';
import { HeatingSystemModule } from './heating-system/heating-system.module';
import { BuildingConditionModule } from './building-condition/building-condition.module';
import { BuildingSeriaModule } from './building-seria/building-seria.module';
import { WaterSupplyModule } from './water-supply/water-supply.module';
import { ParkingModule } from './parking/parking.module';
import { RealtorModule } from './realtor/realtor.module';
import { ObjectModule } from './object/object.module';
import { OwnerRelationModule } from './owner-relation/owner-relation.module';
import { AddressModule } from './address/address.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PrismaModule,
    ObjectTypeModule,
    ResidentTypeModule,
    ObjectCategoryModule,
    ObjectStatusModule,
    CurrencyModule,
    RenovationModule,
    WindowSideModule,
    RoomTypeModule,
    OwnerShipModule,
    ReasonDeletingModule,
    OwnerCoorparetionModule,
    RelationshipTypeModule,
    RegionModule,
    DistrictModule,
    MetroModule,
    WallMaterialModule,
    OverlapsModule,
    HeatingSystemModule,
    BuildingConditionModule,
    BuildingSeriaModule,
    WaterSupplyModule,
    ParkingModule,
    RealtorModule,
    ObjectModule,
    OwnerRelationModule,
    AddressModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
