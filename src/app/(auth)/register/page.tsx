"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { registerSchema, type RegisterInput } from "@/lib/validations/auth";
import { registerUser } from "@/actions/register";
import AuthInput from "@/components/auth/AuthInput";
import PasswordStrength from "@/components/auth/PasswordStrength";

export default function RegisterPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (values: RegisterInput) => {
    startTransition(async () => {
      const result = await registerUser(values);

      if (result.success) {
        toast.success(result.message || "Account created successfully!");
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.error(result.error || "Something went wrong");
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
          Create your account
        </h1>
        <p className="text-sm text-gray-400">
          Start collaborating with your team in seconds.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          label="Full name"
          type="text"
          placeholder="John Doe"
          icon={<User className="w-4 h-4" />}
          error={errors.name?.message}
          disabled={isPending}
          {...register("name")}
        />

        <AuthInput
          label="Email address"
          type="email"
          placeholder="you@company.com"
          icon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          disabled={isPending}
          {...register("email")}
        />

        <div>
          <AuthInput
            label="Password"
            type="password"
            placeholder="Create a strong password"
            icon={<Lock className="w-4 h-4" />}
            error={errors.password?.message}
            disabled={isPending}
            {...register("password", {
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          <PasswordStrength password={password} />
        </div>

        <AuthInput
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          icon={<Lock className="w-4 h-4" />}
          error={errors.confirmPassword?.message}
          disabled={isPending}
          {...register("confirmPassword")}
        />

        {/* Terms */}
        <p className="text-xs text-gray-500 leading-relaxed">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
            Privacy Policy
          </a>
          .
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-xl hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              Create account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Sign in link */}
      <p className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}