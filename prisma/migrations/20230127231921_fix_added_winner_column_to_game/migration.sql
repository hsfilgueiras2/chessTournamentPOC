/*
  Warnings:

  - Added the required column `winner` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "game" ADD COLUMN     "winner" TEXT NOT NULL;
