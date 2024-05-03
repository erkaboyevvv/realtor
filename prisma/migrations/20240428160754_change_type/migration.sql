/*
  Warnings:

  - Changed the type of `is_active` on the `realtor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `firma_id` on the `realtor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `deactive_date` on the `realtor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "realtor" DROP COLUMN "is_active",
ADD COLUMN     "is_active" BOOLEAN NOT NULL,
DROP COLUMN "firma_id",
ADD COLUMN     "firma_id" INTEGER NOT NULL,
DROP COLUMN "deactive_date",
ADD COLUMN     "deactive_date" TIMESTAMP(3) NOT NULL;
