"use client";

import { motion } from "framer-motion";
import { UserPlus, FolderPlus, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your workspace",
    description: "Sign up in seconds. Invite your team with a single shareable link — no complex setup required.",
    accent: "violet",
  },
  {
    number: "02",
    icon: FolderPlus,
    title: "Set up your projects",
    description: "Build projects, define custom workflows, or let AI auto-generate task breakdowns from a simple brief.",
    accent: "blue",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Collaborate with AI",
    description: "Work together in real-time. AI suggests priorities, writes summaries, and keeps everyone aligned.",
    accent: "emerald",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Ship faster, together",
    description: "Track progress with beautiful analytics. Celebrate wins. Continuously improve with AI-driven insights.",
    accent: "amber",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string }> = {
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20 mask-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6"
          >
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
              How it works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient-subtle mb-5 leading-[1.05]"
          >
            From signup to shipping in minutes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            No complex setup. No lengthy onboarding. Just start collaborating immediately.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const accent = accentMap[step.accent];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-full glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                  {/* Step Number Background */}
                  <div className="absolute top-5 right-5 text-5xl font-bold text-white/[0.04] select-none tracking-tighter leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`relative inline-flex w-11 h-11 rounded-xl ${accent.bg} border ${accent.border} items-center justify-center mb-5`}>
                    <step.icon className={`w-5 h-5 ${accent.text}`} />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}