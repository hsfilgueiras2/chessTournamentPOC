import prisma from "../src/database/db";

async function main() {
    await prisma.player.createMany({
        data: [
            {
                name: "Hikaru Nakamura",
                rank: "GM",
                points: 2870
            },
            {
                name: "Magnus Carlsen",
                rank: "GM",
                points: 2880
            },
            {
                name: "Levy Rossman",
                rank: "IM",
                points: 2450
            }
        ]
    });
    await prisma.tournament.create(
        {
            data: {
                name: "Blitz World Championship",
                winnerid: 2,
                prize: 500000
            }
        }
    );
    // tem como saber quais campos preciso preencher no data? \/
    await prisma.game.create(
        {
            data: {
                whiteid: 2,
                blackid: 1,
                winner: "white"
            }
        }
    )

}

main()
    .then(() => console.log("seed realizado"))
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => await prisma.$disconnect())