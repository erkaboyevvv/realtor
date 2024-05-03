/*
  Warnings:

  - You are about to drop the column `firma_id` on the `realtor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "realtor" DROP COLUMN "firma_id";

-- CreateTable
CREATE TABLE "firma" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "realtorId" INTEGER,

    CONSTRAINT "firma_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "firma" ADD CONSTRAINT "firma_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "realtor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
