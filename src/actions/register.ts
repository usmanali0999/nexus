"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { registerSchema, type RegisterInput } from "@/lib/validations/auth";

export async function registerUser(values: RegisterInput) {
  // Validate input
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid fields. Please check your input.",
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "An account with this email already exists.",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Account created successfully! You can now sign in.",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}