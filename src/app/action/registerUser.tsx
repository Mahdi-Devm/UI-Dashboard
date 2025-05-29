"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();
export async function submitLogin(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { error: "Password is not equal to repetition" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "There is a user with this email" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  cookies().set("tokendashboard", token, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return {
    success: "Successful registration",
    user: {
      id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
    },
  };
}
