// import { PrismaClient, Role } from "@prisma/client";
// import { hash } from "bcryptjs";
// import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// async function main() {
//   // Loop to create 30 users
//   for (let i = 0; i < 40; i++) {
//     const firstName = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const email = faker.internet.email({ firstName, lastName });
//     const hashedPassword = await hash("password123", 10);
//     const imgUrl = faker.image.url()

//     await prisma.user.create({
//       data: {
//         firstName,
//         lastName,
//         email,
//         password: hashedPassword,
//         role: getRandomRole() as Role,
//         status: "ACTIVE",
//         imgUrl
//       },
//     });
//   }
// }

// Function to get random roles
// function getRandomRole() {
//   const roles: Role[] = ["RETAILER", "DISTRIBUTOR", "DRIVER", "ADMIN"];
//   return roles[Math.floor(Math.random() * roles.length)];
// }

export async function GET() {
  try {
    // await main();
    // await prisma.$disconnect();

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error(error);
    // await prisma.$disconnect();
    return Response.json({ error }, { status: 500 });
  }
}