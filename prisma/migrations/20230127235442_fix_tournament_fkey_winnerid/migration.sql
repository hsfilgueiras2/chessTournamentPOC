-- DropForeignKey
ALTER TABLE "tournament" DROP CONSTRAINT "tournament_prize_fkey";

-- AddForeignKey
ALTER TABLE "tournament" ADD CONSTRAINT "tournament_winnerid_fkey" FOREIGN KEY ("winnerid") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
