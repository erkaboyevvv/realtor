/*
  Warnings:

  - Added the required column `apartment_id` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area_id` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balcony_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balcony_description` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `building_year` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cadastral_number` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ceiling_height` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `combined_bath_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commision_amount` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commision_comment` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deposit_amount` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deposit_paid` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor_in_building` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fotos` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freight_elevators_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `general_description` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house_number` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_apartment` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_building_security` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_demolition_planned` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_electric` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_gas` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_luxury` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_studio` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kitchen_area` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landmark` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `layout` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `live_area` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_description` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loggia_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loggia_desciption` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `online_show` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_price_ideal` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_price_minimal` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_price_real` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passeger_elevators_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_per_square` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_type` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms_area` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `separate_bath_count` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_area` to the `object` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video` to the `object` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "building_condition" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "building_seria" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "currency" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "district" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "heating_system" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "metro" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "object" ADD COLUMN     "apartment_id" INTEGER NOT NULL,
ADD COLUMN     "area_id" TEXT NOT NULL,
ADD COLUMN     "balcony_count" INTEGER NOT NULL,
ADD COLUMN     "balcony_description" TEXT NOT NULL,
ADD COLUMN     "building_year" INTEGER NOT NULL,
ADD COLUMN     "cadastral_number" INTEGER NOT NULL,
ADD COLUMN     "ceiling_height" INTEGER NOT NULL,
ADD COLUMN     "combined_bath_count" INTEGER NOT NULL,
ADD COLUMN     "commision_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "commision_comment" TEXT NOT NULL,
ADD COLUMN     "deposit_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "deposit_paid" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "floor_in_building" INTEGER NOT NULL,
ADD COLUMN     "fotos" TEXT NOT NULL,
ADD COLUMN     "freight_elevators_count" INTEGER NOT NULL,
ADD COLUMN     "general_description" TEXT NOT NULL,
ADD COLUMN     "house_number" INTEGER NOT NULL,
ADD COLUMN     "is_apartment" BOOLEAN NOT NULL,
ADD COLUMN     "is_building_security" BOOLEAN NOT NULL,
ADD COLUMN     "is_demolition_planned" BOOLEAN NOT NULL,
ADD COLUMN     "is_electric" BOOLEAN NOT NULL,
ADD COLUMN     "is_gas" BOOLEAN NOT NULL,
ADD COLUMN     "is_luxury" BOOLEAN NOT NULL,
ADD COLUMN     "is_studio" BOOLEAN NOT NULL,
ADD COLUMN     "kitchen_area" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "landmark" TEXT NOT NULL,
ADD COLUMN     "layout" TEXT NOT NULL,
ADD COLUMN     "live_area" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "location_description" TEXT NOT NULL,
ADD COLUMN     "loggia_count" INTEGER NOT NULL,
ADD COLUMN     "loggia_desciption" TEXT NOT NULL,
ADD COLUMN     "online_show" BOOLEAN NOT NULL,
ADD COLUMN     "owner_price_ideal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "owner_price_minimal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "owner_price_real" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "passeger_elevators_count" INTEGER NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "price_per_square" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "price_type" TEXT NOT NULL,
ADD COLUMN     "rooms_area" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "separate_bath_count" INTEGER NOT NULL,
ADD COLUMN     "total_area" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "video" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "object_category" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "object_status" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "object_type" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "owner_coorperation" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "owner_ship" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "parking" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "realtor" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "reason_deleting" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "relationship_type" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "renovation" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "resident_type" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "root_type" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "wall_material" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "water_supply" ADD COLUMN     "objectId" INTEGER;

-- AlterTable
ALTER TABLE "window_side" ADD COLUMN     "objectId" INTEGER;

-- CreateTable
CREATE TABLE "neighborhood" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "neighborhood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Street" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overlaps" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "overlaps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "realtor" ADD CONSTRAINT "realtor_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_condition" ADD CONSTRAINT "building_condition_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_seria" ADD CONSTRAINT "building_seria_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_supply" ADD CONSTRAINT "water_supply_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking" ADD CONSTRAINT "parking_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resident_type" ADD CONSTRAINT "resident_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_type" ADD CONSTRAINT "object_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_category" ADD CONSTRAINT "object_category_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_status" ADD CONSTRAINT "object_status_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currency" ADD CONSTRAINT "currency_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "renovation" ADD CONSTRAINT "renovation_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "window_side" ADD CONSTRAINT "window_side_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "root_type" ADD CONSTRAINT "root_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_ship" ADD CONSTRAINT "owner_ship_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reason_deleting" ADD CONSTRAINT "reason_deleting_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_coorperation" ADD CONSTRAINT "owner_coorperation_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_type" ADD CONSTRAINT "relationship_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metro" ADD CONSTRAINT "metro_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wall_material" ADD CONSTRAINT "wall_material_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heating_system" ADD CONSTRAINT "heating_system_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "neighborhood" ADD CONSTRAINT "neighborhood_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overlaps" ADD CONSTRAINT "overlaps_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;
