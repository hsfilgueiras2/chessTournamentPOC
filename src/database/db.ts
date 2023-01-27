import pkg from '@prisma/client'

const { PrismaClient} = pkg;
const prisma = new PrismaClient(); //posso deixar sem parentes?

export default prisma;
