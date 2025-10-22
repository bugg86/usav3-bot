/*
  Warnings:

  - You are about to drop the `Signup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Signup";

-- CreateTable
CREATE TABLE "Scrim" (
    "uid" SERIAL NOT NULL,
    "osuId" INTEGER NOT NULL,
    "discordUsername" VARCHAR(255) NOT NULL,
    "discordId" INTEGER NOT NULL,
    "osuUsername" VARCHAR(255) NOT NULL,
    "weeksRegistered" INTEGER[],

    CONSTRAINT "Scrim_pkey" PRIMARY KEY ("uid")
);
