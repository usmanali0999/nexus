"use client";

import { motion } from "framer-motion";
import {
  Brain, Users, Kanban, MessageSquare, PenTool, Shield,
  Workflow, BarChart3, Layers,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI that thinks ahead",
    description: "Auto-generate tasks from briefs, get smart summaries, and let AI handle the boring stuff.",
    color: "violet",
  },
  {
    icon: Users,
    title: "Real-time presence",
    description: "See cursors, edits, and team activity in real-time with zero lag.",
    color: "blue",
  },
  {
    icon: Kanban,
    title: "Beautiful boards",
    description: "Drag-and-drop kanban with custom workflows, automations, and instant filtering.",
    color: "emerald",
  },
  {
    icon: MessageSquare,
    title: "Inline conversations",
    description: "Thread discussions on every task. No more context-switching between apps.",
    color: "orange",
  },
  {
    icon: PenTool,
    title: "Infinite canvas",
    description: "Brainstorm on whiteboards with sticky notes, shapes, and freeform drawing.",
    color: "pink",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    description: "Track velocity, predict bottlenecks, and visualize team health beautifully.",
    color: "amber",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "SOC 2 compliant with SSO, SAML, encryption, and granular access control.",
    color: "red",
  },
  {
    icon: Workflow,
    title: "Custom automations",
    description: "Build if-then workflows that handle repetitive tasks automatically.",
    color: "indigo",
  },
  {
    icon: Layers,
    title: "Multi-workspace",
    description: "Switch between teams, clients, or projects with full context isolation.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", ring: "group-hover:ring-violet-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", ring: "group-hover:ring-blue-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", ring: "group-hover:ring-emerald-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", ring: "group-hover:ring-orange-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", ring: "group-hover:ring-pink-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", ring: "group-hover:ring-amber-500/20" },
  red: { bg: "bg-red-500/10", text: "text-red-400", ring: "group-hover:ring-red-500/20" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", ring: "group-hover:ring-indigo-500/20" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", ring: "group-hover:ring-teal-500/20" },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-dots opacity-30 mask-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6"
          >
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient-subtle mb-5 leading-[1.05]"
          >
            Everything your team needs to ship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Stop juggling tools. Nexus combines project management, real-time collaboration, and AI assistance into one seamless platform.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group relative p-6 rounded-2xl glass hover:bg-white/[0.04] ring-1 ring-transparent ${colors.ring} transition-all duration-300`}
              >
                <div className={`inline-flex w-11 h-11 rounded-xl ${colors.bg} items-center justify-center mb-5`}>
                  <feature.icon className={`w-5 h-5 ${colors.text}`} />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}