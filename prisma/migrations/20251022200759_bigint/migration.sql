/*
  Warnings:

  - Changed the type of `discordId` on the `Scrim` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Scrim" DROP COLUMN "discordId",
ADD COLUMN     "discordId" BIGINT NOT NULL;
