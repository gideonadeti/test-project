"use server";

import { z } from "zod";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { addUser as createUser } from "./data";

// Zod schema to validate user data
const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

// Helper function to parse and validate form data
function parseFormData(formData: FormData) {
  const rawFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  };
  return UserSchema.parse(rawFormData);
}

// Function to add a user
export async function addUser(formData: FormData) {
  const { firstName, lastName, email, password, role } =
    parseFormData(formData);
  const hashedPassword = await hash(password, 10);

  // Ensure `createUser` is properly defined and imported
  await createUser(firstName, lastName, email, hashedPassword, role, false);

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
