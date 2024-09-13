"use server";

import { z } from "zod";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

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

// Helper function to send email
async function sendInviteEmail(
  firstName: string,
  email: string,
  password: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const subject = "You've been invited to join Test Project!";
  const html = `
    <h3>Hi ${firstName},</h3>

    <p>You've been invited to join Test Project. Please <a href="https://www.example.com">log in</a> using the following temporary password:</p>

    <p><b>Temporary Password:</b> ${password}</p>

    <p>You will be prompted to change your password upon login.</p>

    <p>Best regards,</p>
    <p>The Test Project Team</p>`;

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending invite email:", error);
  }
}

// Function to invite a user (via email)
export async function inviteUser(formData: FormData) {
  const { firstName, lastName, email, password, role } =
    parseFormData(formData);
  const hashedPassword = await hash(password, 10);

  await createUser(firstName, lastName, email, hashedPassword, role, true);

  await sendInviteEmail(firstName, email, password);

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
