/*
  Warnings:

  - You are about to drop the `adress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Street" DROP CONSTRAINT "Street_addressId_fkey";

-- DropForeignKey
ALTER TABLE "building_condition" DROP CONSTRAINT "building_condition_addressId_fkey";

-- DropForeignKey
ALTER TABLE "building_seria" DROP CONSTRAINT "building_seria_addressId_fkey";

-- DropForeignKey
ALTER TABLE "district" DROP CONSTRAINT "district_addressId_fkey";

-- DropForeignKey
ALTER TABLE "heating_system" DROP CONSTRAINT "heating_system_addressId_fkey";

-- DropForeignKey
ALTER TABLE "metro" DROP CONSTRAINT "metro_addressId_fkey";

-- DropForeignKey
ALTER TABLE "neighborhood" DROP CONSTRAINT "neighborhood_addressId_fkey";

-- DropForeignKey
ALTER TABLE "overlaps" DROP CONSTRAINT "overlaps_addressId_fkey";

-- DropForeignKey
ALTER TABLE "parking" DROP CONSTRAINT "parking_addressId_fkey";

-- DropForeignKey
ALTER TABLE "wall_material" DROP CONSTRAINT "wall_material_addressId_fkey";

-- DropForeignKey
ALTER TABLE "water_supply" DROP CONSTRAINT "water_supply_addressId_fkey";

-- DropTable
DROP TABLE "adress";

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "area_id" TEXT,
    "house_number" INTEGER,
    "apartment_id" INTEGER,
    "location" TEXT,
    "landmark" TEXT,
    "location_description" TEXT,
    "building_year" INTEGER,
    "is_gas" BOOLEAN,
    "is_electric" BOOLEAN,
    "passeger_elevators_count" INTEGER,
    "freight_elevators_count" INTEGER,
    "is_building_security" BOOLEAN,
    "is_demolition_planned" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "building_condition" ADD CONSTRAINT "building_condition_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_seria" ADD CONSTRAINT "building_seria_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_supply" ADD CONSTRAINT "water_supply_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking" ADD CONSTRAINT "parking_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metro" ADD CONSTRAINT "metro_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wall_material" ADD CONSTRAINT "wall_material_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heating_system" ADD CONSTRAINT "heating_system_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "neighborhood" ADD CONSTRAINT "neighborhood_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overlaps" ADD CONSTRAINT "overlaps_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
