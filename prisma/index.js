const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.tasks.create({
    data: {
      title: "Clean your room",
      points: 25,
    },
  });

  await prisma.tasks.create({
    data: {
      title: "Piano practice",
      points: 10,
    },
  });

  await prisma.tasks.create({
    data: {
      title: "Tuition practice",
      points: 10,
    },
  });

  const tasks = await prisma.tasks.findMany();

  console.dir(tasks, { depth: Infinity });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
