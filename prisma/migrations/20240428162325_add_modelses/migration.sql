-- CreateTable
CREATE TABLE "resident_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resident_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "residentTypeId" INTEGER,

    CONSTRAINT "object_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "object_type" ADD CONSTRAINT "object_type_residentTypeId_fkey" FOREIGN KEY ("residentTypeId") REFERENCES "resident_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
