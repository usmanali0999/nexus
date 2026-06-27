"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, LogOut, User, Settings, ChevronDown, LayoutDashboard, FolderKanban, Users } from "lucide-react";
import { logoutUser } from "@/actions/logout";

interface DashboardNavProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function DashboardNav({ user }: DashboardNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email?.[0].toUpperCase() || "U";

  const handleLogout = () => {
    startTransition(async () => {
      await logoutUser();
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#050507]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                Nexus
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
                { label: "Projects", href: "/projects", icon: FolderKanban },
                { label: "Team", href: "/team", icon: Users },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
                {initials}
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {user.name?.split(" ")[0] || "User"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300 transition-colors" />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMenuOpen(false)}
                  />

                  {/* Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 z-50 glass-strong rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {/* User Info */}
                    <div className="p-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                          {initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-white truncate">
                            {user.name || "User"}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-1.5">
                      {[
                        { label: "Profile", icon: User, href: "/profile" },
                        { label: "Settings", icon: Settings, href: "/settings" },
                      ].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Logout */}
                    <div className="p-1.5 border-t border-white/[0.06]">
                      <button
                        onClick={handleLogout}
                        disabled={isPending}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/[0.06] rounded-lg transition-all disabled:opacity-50"
                      >
                        <LogOut className="w-4 h-4" />
                        {isPending ? "Signing out..." : "Sign out"}
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}