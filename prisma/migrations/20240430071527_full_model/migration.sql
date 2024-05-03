/*
  Warnings:

  - You are about to drop the column `objectId` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `Street` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `building_condition` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `building_seria` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `district` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `heating_system` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `metro` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `neighborhood` table. All the data in the column will be lost.
  - You are about to drop the column `apartment_id` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `area_id` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `building_year` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `commision_amount` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `commision_comment` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `deposit_amount` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `deposit_paid` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `freight_elevators_count` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `house_number` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `is_building_security` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `is_demolition_planned` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `is_electric` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `is_gas` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `landmark` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `location_description` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `owner_price_ideal` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `owner_price_minimal` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `owner_price_real` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `passeger_elevators_count` on the `object` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `overlaps` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `owner_coorperation` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `owner_ship` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `parking` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `reason_deleting` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `relationship_type` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `wall_material` table. All the data in the column will be lost.
  - You are about to drop the column `objectId` on the `water_supply` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_objectId_fkey";

-- DropForeignKey
ALTER TABLE "Street" DROP CONSTRAINT "Street_objectId_fkey";

-- DropForeignKey
ALTER TABLE "building_condition" DROP CONSTRAINT "building_condition_objectId_fkey";

-- DropForeignKey
ALTER TABLE "building_seria" DROP CONSTRAINT "building_seria_objectId_fkey";

-- DropForeignKey
ALTER TABLE "district" DROP CONSTRAINT "district_objectId_fkey";

-- DropForeignKey
ALTER TABLE "heating_system" DROP CONSTRAINT "heating_system_objectId_fkey";

-- DropForeignKey
ALTER TABLE "metro" DROP CONSTRAINT "metro_objectId_fkey";

-- DropForeignKey
ALTER TABLE "neighborhood" DROP CONSTRAINT "neighborhood_objectId_fkey";

-- DropForeignKey
ALTER TABLE "overlaps" DROP CONSTRAINT "overlaps_objectId_fkey";

-- DropForeignKey
ALTER TABLE "owner_coorperation" DROP CONSTRAINT "owner_coorperation_objectId_fkey";

-- DropForeignKey
ALTER TABLE "owner_ship" DROP CONSTRAINT "owner_ship_objectId_fkey";

-- DropForeignKey
ALTER TABLE "parking" DROP CONSTRAINT "parking_objectId_fkey";

-- DropForeignKey
ALTER TABLE "reason_deleting" DROP CONSTRAINT "reason_deleting_objectId_fkey";

-- DropForeignKey
ALTER TABLE "relationship_type" DROP CONSTRAINT "relationship_type_objectId_fkey";

-- DropForeignKey
ALTER TABLE "wall_material" DROP CONSTRAINT "wall_material_objectId_fkey";

-- DropForeignKey
ALTER TABLE "water_supply" DROP CONSTRAINT "water_supply_objectId_fkey";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "Street" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "building_condition" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "building_seria" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "district" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "heating_system" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "metro" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "neighborhood" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "object" DROP COLUMN "apartment_id",
DROP COLUMN "area_id",
DROP COLUMN "building_year",
DROP COLUMN "commision_amount",
DROP COLUMN "commision_comment",
DROP COLUMN "deposit_amount",
DROP COLUMN "deposit_paid",
DROP COLUMN "freight_elevators_count",
DROP COLUMN "house_number",
DROP COLUMN "is_building_security",
DROP COLUMN "is_demolition_planned",
DROP COLUMN "is_electric",
DROP COLUMN "is_gas",
DROP COLUMN "landmark",
DROP COLUMN "location",
DROP COLUMN "location_description",
DROP COLUMN "owner_price_ideal",
DROP COLUMN "owner_price_minimal",
DROP COLUMN "owner_price_real",
DROP COLUMN "passeger_elevators_count";

-- AlterTable
ALTER TABLE "overlaps" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "owner_coorperation" DROP COLUMN "objectId",
ADD COLUMN     "ownerRelationId" INTEGER;

-- AlterTable
ALTER TABLE "owner_ship" DROP COLUMN "objectId",
ADD COLUMN     "ownerRelationId" INTEGER;

-- AlterTable
ALTER TABLE "parking" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "reason_deleting" DROP COLUMN "objectId",
ADD COLUMN     "ownerRelationId" INTEGER;

-- AlterTable
ALTER TABLE "relationship_type" DROP COLUMN "objectId",
ADD COLUMN     "ownerRelationId" INTEGER;

-- AlterTable
ALTER TABLE "wall_material" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- AlterTable
ALTER TABLE "water_supply" DROP COLUMN "objectId",
ADD COLUMN     "addressId" INTEGER;

-- CreateTable
CREATE TABLE "owner_relation" (
    "id" SERIAL NOT NULL,
    "commision_amount" DECIMAL(65,30) NOT NULL,
    "commision_comment" TEXT NOT NULL,
    "deposit_amount" DECIMAL(65,30) NOT NULL,
    "deposit_paid" DECIMAL(65,30) NOT NULL,
    "owner_price_ideal" DECIMAL(65,30) NOT NULL,
    "owner_price_real" DECIMAL(65,30) NOT NULL,
    "owner_price_minimal" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "owner_relation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adress" (
    "id" SERIAL NOT NULL,
    "area_id" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "apartment_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "location_description" TEXT NOT NULL,
    "building_year" INTEGER NOT NULL,
    "is_gas" BOOLEAN NOT NULL,
    "is_electric" BOOLEAN NOT NULL,
    "passeger_elevators_count" INTEGER NOT NULL,
    "freight_elevators_count" INTEGER NOT NULL,
    "is_building_security" BOOLEAN NOT NULL,
    "is_demolition_planned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "building_condition" ADD CONSTRAINT "building_condition_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_seria" ADD CONSTRAINT "building_seria_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_supply" ADD CONSTRAINT "water_supply_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking" ADD CONSTRAINT "parking_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_ship" ADD CONSTRAINT "owner_ship_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "owner_relation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reason_deleting" ADD CONSTRAINT "reason_deleting_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "owner_relation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_coorperation" ADD CONSTRAINT "owner_coorperation_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "owner_relation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_type" ADD CONSTRAINT "relationship_type_ownerRelationId_fkey" FOREIGN KEY ("ownerRelationId") REFERENCES "owner_relation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metro" ADD CONSTRAINT "metro_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wall_material" ADD CONSTRAINT "wall_material_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heating_system" ADD CONSTRAINT "heating_system_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "neighborhood" ADD CONSTRAINT "neighborhood_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overlaps" ADD CONSTRAINT "overlaps_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE SET NULL ON UPDATE CASCADE;
