-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'REVIEWER');

-- CreateTable
CREATE TABLE "contests" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "contests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "score" INTEGER NOT NULL,
    "outside_contest" BOOLEAN NOT NULL,
    "contest" UUID NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'REVIEWER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "score" INTEGER NOT NULL,
    "participant" UUID,
    "user" UUID,
    "contest" UUID,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_contest_fkey" FOREIGN KEY ("contest") REFERENCES "contests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_participant_fkey" FOREIGN KEY ("participant") REFERENCES "participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_contest_fkey" FOREIGN KEY ("contest") REFERENCES "contests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

