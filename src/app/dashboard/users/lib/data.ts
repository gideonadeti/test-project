import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers(name: string, role: string) {
  try {
    let users;

    if (!name && !role) {
      // Case 1: No filters, return all users
      users = await prisma.user.findMany();
    } else if (name && !role) {
      // Case 2: Filter by name (either firstName or lastName)
      users = await prisma.user.findMany({
        where: {
          OR: [
            { firstName: { contains: name, mode: "insensitive" } },
            { lastName: { contains: name, mode: "insensitive" } },
          ],
        },
      });
    } else if (!name && role) {
      // Case 3: Filter by role (role)
      users = await prisma.user.findMany({
        where: {
          role: mapRoleToRoleType(role),
        },
      });
    } else if (name && role) {
      // Case 4: Filter by both name and role
      users = await prisma.user.findMany({
        where: {
          AND: [
            {
              OR: [
                { firstName: { contains: name, mode: "insensitive" } },
                { lastName: { contains: name, mode: "insensitive" } },
              ],
            },
            { role: mapRoleToRoleType(role) },
          ],
        },
      });
    }

    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  }
}

export async function addUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
  invited: boolean
) {
  try {
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        role: mapRoleToRoleType(role),
        status: invited ? "PENDING" : "ACTIVE",
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error adding user");
  }
}

export async function getUser(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
  }
}

// Helper function to map userType to role
function mapRoleToRoleType(role: string) {
  switch (role) {
    case "retailer":
      return "RETAILER";
    case "distributor":
      return "DISTRIBUTOR";
    case "driver":
      return "DRIVER";
    case "admin":
      return "ADMIN";
    default:
      throw new Error(`Unknown userType: ${role}`);
  }
}
