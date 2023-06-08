/*
  Warnings:

  - Added the required column `categority` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "categority" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL;
