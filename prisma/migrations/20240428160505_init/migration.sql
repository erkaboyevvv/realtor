-- CreateTable
CREATE TABLE "realtor" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "is_active" TEXT NOT NULL,
    "firma_id" TEXT NOT NULL,
    "deactive_date" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "realtor_pkey" PRIMARY KEY ("id")
);
