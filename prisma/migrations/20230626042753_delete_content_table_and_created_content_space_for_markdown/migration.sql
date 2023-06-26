/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContentToProjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ContentToProjects" DROP CONSTRAINT "_ContentToProjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToProjects" DROP CONSTRAINT "_ContentToProjects_B_fkey";

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "content" TEXT;

-- DropTable
DROP TABLE "Content";

-- DropTable
DROP TABLE "_ContentToProjects";
