"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { loginUser } from "@/actions/login";
import AuthInput from "@/components/auth/AuthInput";

export default function LoginPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (values: LoginInput) => {
    startTransition(async () => {
      const result = await loginUser(values);

      if (result.success) {
        toast.success("Welcome back!");
        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 500);
      } else {
        toast.error(result.error || "Login failed");
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
          Welcome back
        </h1>
        <p className="text-sm text-gray-400">
          Sign in to continue to your workspace.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          label="Email address"
          type="email"
          placeholder="you@company.com"
          icon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          disabled={isPending}
          autoComplete="email"
          {...register("email")}
        />

        <div>
          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<Lock className="w-4 h-4" />}
            error={errors.password?.message}
            disabled={isPending}
            autoComplete="current-password"
            {...register("password")}
          />

          <div className="flex justify-end mt-2">
            <a
              href="#"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-xl hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign in
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Sign up link */}
      <p className="mt-8 text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          Create one for free
        </Link>
      </p>
    </div>
  );
}