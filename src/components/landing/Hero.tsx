"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-violet-600/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-40 mask-radial" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass hover:bg-white/[0.05] transition-all"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                New
              </span>
              <span className="text-sm text-gray-300">
                Introducing AI-powered task automation
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.95] mb-6"
          >
            <span className="text-gradient-subtle">Where teams</span>
            <br />
            <span className="text-gradient">build the future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nexus is the AI-powered collaboration platform that helps modern teams plan, build, and ship faster — all in one beautiful workspace.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <a
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl bg-white hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto"
            >
              <span className="text-gray-900">Start for free</span>
              <ArrowRight className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-xl glass hover:bg-white/[0.06] transition-all duration-200 w-full sm:w-auto"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch demo
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["from-violet-500 to-purple-600", "from-blue-500 to-cyan-600", "from-emerald-500 to-teal-600", "from-amber-500 to-orange-600"].map((g, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-[#050507]`} />
                ))}
              </div>
              <span>
                <span className="text-white font-medium">12,000+</span> teams trust Nexus
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/10" />

            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                <span className="text-white font-medium">4.9</span> from 2,000+ reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-gradient-to-b from-violet-600/20 via-purple-600/10 to-transparent rounded-[3rem] blur-3xl" />

          {/* Browser Window */}
          <div className="relative rounded-xl overflow-hidden glass-strong shadow-2xl shadow-black/50">
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-1 rounded-md bg-white/[0.04] text-xs text-gray-500 font-mono">
                  app.nexus.dev/workspace
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-12 bg-[#0a0a12] min-h-[480px]">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-white/[0.04] p-4 hidden md:block">
                <div className="space-y-1">
                  <div className="px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <div className="h-2 w-20 rounded-full bg-violet-300/40" />
                  </div>
                  {[24, 28, 22, 26, 30].map((w, i) => (
                    <div key={i} className="px-3 py-2 flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className={`h-2 rounded-full bg-white/[0.08]`} style={{ width: `${w * 3}px` }} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <div className="text-[10px] uppercase tracking-wider text-gray-600 mb-2 px-3">Projects</div>
                  {[
                    { color: "bg-violet-400", w: 70 },
                    { color: "bg-blue-400", w: 90 },
                    { color: "bg-emerald-400", w: 60 },
                  ].map((p, i) => (
                    <div key={i} className="px-3 py-1.5 flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
                      <div className="h-2 rounded-full bg-white/[0.08]" style={{ width: `${p.w}px` }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Main */}
              <div className="col-span-12 md:col-span-9 p-5">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="h-3 w-32 rounded-full bg-white/15 mb-2" />
                    <div className="h-2 w-48 rounded-full bg-white/[0.08]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {["bg-violet-500", "bg-blue-500", "bg-emerald-500"].map((b, i) => (
                        <div key={i} className={`w-6 h-6 rounded-full ${b} border-2 border-[#0a0a12]`} />
                      ))}
                    </div>
                    <div className="h-7 w-16 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {[
                    { from: "from-violet-500/20", to: "to-purple-500/5", border: "border-violet-500/15", num: "42" },
                    { from: "from-emerald-500/20", to: "to-teal-500/5", border: "border-emerald-500/15", num: "18" },
                    { from: "from-amber-500/20", to: "to-orange-500/5", border: "border-amber-500/15", num: "7" },
                    { from: "from-blue-500/20", to: "to-cyan-500/5", border: "border-blue-500/15", num: "94%" },
                  ].map((s, i) => (
                    <div key={i} className={`rounded-xl bg-gradient-to-br ${s.from} ${s.to} border ${s.border} p-4`}>
                      <div className="h-1.5 w-12 rounded-full bg-white/20 mb-3" />
                      <div className="text-xl font-semibold text-white">{s.num}</div>
                    </div>
                  ))}
                </div>

                {/* Kanban */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "Backlog", count: 5, accent: "bg-gray-500" },
                    { name: "In Progress", count: 3, accent: "bg-amber-500" },
                    { name: "Done", count: 8, accent: "bg-emerald-500" },
                  ].map((col, ci) => (
                    <div key={ci} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${col.accent}`} />
                          <div className="text-xs text-gray-400 font-medium">{col.name}</div>
                        </div>
                        <div className="text-[10px] text-gray-500 bg-white/[0.04] px-1.5 py-0.5 rounded">{col.count}</div>
                      </div>
                      {[...Array(ci === 0 ? 3 : 2)].map((_, i) => (
                        <div key={i} className="mb-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] transition-colors">
                          <div className="h-1.5 w-20 rounded-full bg-violet-400/50 mb-2" />
                          <div className="h-2 w-full rounded-full bg-white/15 mb-1.5" />
                          <div className="h-2 w-3/4 rounded-full bg-white/10 mb-3" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                              <div className="h-1.5 w-8 rounded-full bg-white/[0.08]" />
                            </div>
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 border border-white/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -top-6 -right-8 glass-strong rounded-xl px-4 py-3 shadow-2xl items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">AI organized 3 tasks</div>
              <div className="text-[10px] text-gray-400">Just now</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute -bottom-5 -left-8 glass-strong rounded-xl px-4 py-3 shadow-2xl items-center gap-3"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Sarah is editing</div>
              <div className="text-[10px] text-gray-400">Homepage Redesign</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 pt-12 border-t border-white/[0.04]"
        >
          {[
            { value: 12, suffix: "K+", label: "Active teams" },
            { value: 2, suffix: "M+", label: "Tasks shipped" },
            { value: 99, suffix: ".9%", label: "Uptime" },
            { value: 150, suffix: "+", label: "Integrations" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}