"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, icon, type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>

        <div className="relative group">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-violet-400 transition-colors">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            className={cn(
              "w-full px-4 py-2.5 text-sm bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600",
              "focus:outline-none focus:bg-white/[0.05] focus:border-violet-500/40 focus:ring-4 focus:ring-violet-500/10",
              "transition-all duration-200",
              icon && "pl-10",
              isPassword && "pr-10",
              error && "border-red-500/40 focus:border-red-500/40 focus:ring-red-500/10",
              className
            )}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-400" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;