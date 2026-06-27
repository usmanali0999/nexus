"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const checks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "One lowercase letter", valid: /[a-z]/.test(password) },
    { label: "One number", valid: /[0-9]/.test(password) },
  ];

  const validCount = checks.filter((c) => c.valid).length;
  const strength = (validCount / checks.length) * 100;

  const getStrengthColor = () => {
    if (strength === 0) return "bg-gray-700";
    if (strength <= 25) return "bg-red-500";
    if (strength <= 50) return "bg-orange-500";
    if (strength <= 75) return "bg-yellow-500";
    return "bg-emerald-500";
  };

  const getStrengthLabel = () => {
    if (strength === 0) return "";
    if (strength <= 25) return "Weak";
    if (strength <= 50) return "Fair";
    if (strength <= 75) return "Good";
    return "Strong";
  };

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      {/* Strength bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className={cn("h-full transition-all duration-300", getStrengthColor())}
            style={{ width: `${strength}%` }}
          />
        </div>
        <span className="text-xs font-medium text-gray-400 min-w-[50px] text-right">
          {getStrengthLabel()}
        </span>
      </div>

      {/* Checks */}
      <div className="grid grid-cols-2 gap-1.5">
        {checks.map((check, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-1.5 text-[11px] transition-colors",
              check.valid ? "text-emerald-400" : "text-gray-500"
            )}
          >
            {check.valid ? (
              <Check className="w-3 h-3 flex-shrink-0" />
            ) : (
              <X className="w-3 h-3 flex-shrink-0" />
            )}
            {check.label}
          </div>
        ))}
      </div>
    </div>
  );
}