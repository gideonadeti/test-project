import Link from "next/link";
import Image from "next/image";

import imgSrc from "@/public/images/logo.svg";

import { getUsers } from "../lib/data";
import { User } from "@prisma/client"; // Importing the Prisma User type

// SearchResults component that fetches and categorizes users
export async function SearchResults({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    role?: string;
  };
}) {
  const name = searchParams?.name || "";
  const role = searchParams?.role || "";

  // Fetch filtered users based on name and role
  const users = await getUsers(name, role);

  if (!users || users.length === 0) {
    return (
      <div
        className="bg-blue-100 text-blue-800 mx-auto p-4 rounded"
        role="alert"
        style={{ maxWidth: "max-content" }}
      >
        No Users found
      </div>
    );
  }

  const categorizedUsers = categorizeUsers(users);

  return (
    <div className="h-full overflow-y-auto pt-4 pb-60">
      {categorizedUsers.map((segment) => {
        if (segment.users.length > 0) {
          return (
            <Category
              key={segment.type}
              type={segment.type}
              users={segment.users}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

// Function to categorize users by their role
function categorizeUsers(users: User[]): { type: string; users: User[] }[] {
  return [
    {
      type: "Retailers",
      users: users.filter((user) => user.role === "RETAILER"),
    },
    {
      type: "Distributors",
      users: users.filter((user) => user.role === "DISTRIBUTOR"),
    },
    { type: "Drivers", users: users.filter((user) => user.role === "DRIVER") },
    {
      type: "Internal Admins",
      users: users.filter((user) => user.role === "ADMIN"),
    },
  ];
}

// Group component to render a category of users
function Category({ type, users }: { type: string; users: User[] }) {
  return (
    <div className="mb-6">
      <h5 className="border-b px-8 text-xl font-medium">{type}</h5>
      <ul className="px-8 space-y-2">
        {users.map((user) => (
          <UserItem
            key={user.id}
            name={`${user.firstName} ${user.lastName}`}
            id={user.id}
          />
        ))}
      </ul>
    </div>
  );
}

// Component to render individual user links
function UserItem({ name, id }: { name: string; id: string }) {
  return (
    <li className="border-b last:border-b-0 p-2">
      <Link
        href={`users/${id}`}
        className="flex items-center gap-2 text-blue-500 hover:underline"
      >
        <Image src={imgSrc} alt={name} width={40} height={40} />
        {name}
      </Link>
    </li>
  );
}
