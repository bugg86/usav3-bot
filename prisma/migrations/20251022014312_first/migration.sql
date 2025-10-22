-- CreateTable
CREATE TABLE "Signup" (
    "uid" SERIAL NOT NULL,
    "osuId" INTEGER NOT NULL,
    "discordUsername" VARCHAR(255) NOT NULL,
    "discordId" INTEGER NOT NULL,
    "osuUsername" VARCHAR(255) NOT NULL,
    "weeksRegistered" INTEGER[],

    CONSTRAINT "Signup_pkey" PRIMARY KEY ("uid")
);
