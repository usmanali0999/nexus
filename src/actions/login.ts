"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";

export async function loginUser(values: LoginInput) {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid email or password.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      success: true,
      message: "Logged in successfully!",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            error: "Invalid email or password.",
          };
        default:
          return {
            success: false,
            error: "Something went wrong. Please try again.",
          };
      }
    }

    throw error;
  }
}