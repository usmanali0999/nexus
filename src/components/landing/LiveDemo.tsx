"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Sparkles, Send, Bot, Users, ArrowDown } from "lucide-react";

const aiMessages = [
  { id: 1, type: "user", text: "Summarize today's sprint progress" },
  {
    id: 2,
    type: "ai",
    text: "✅ 8 tasks completed (Frontend: 5, Backend: 3)\n⏳ 3 tasks in progress\n🚨 1 blocked: API rate limiting\n\n📊 Sprint velocity: 87% — ahead of schedule!",
  },
  { id: 3, type: "user", text: "Break down the homepage redesign" },
  {
    id: 4,
    type: "ai",
    text: "Created 6 tasks for Homepage Redesign:\n\n1. Design hero section mockup\n2. Build responsive navigation\n3. Implement scroll animations\n4. Optimize image assets\n5. Add SEO meta tags\n6. Cross-browser testing\n\nEstimated: 4 days | Team: Design",
  },
];

const liveActivities = [
  { id: "a1", user: "Sarah", action: "moved", target: "Auth Flow", status: "Done", color: "emerald" },
  { id: "a2", user: "Mike", action: "commented on", target: "API Design", status: null, color: "blue" },
  { id: "a3", user: "Alex", action: "created", target: "Bug Fix #42", status: "To Do", color: "violet" },
  { id: "a4", user: "Priya", action: "completed", target: "Mobile responsive layout", status: "Done", color: "emerald" },
];

export default function LiveDemo() {
  const [visibleIds, setVisibleIds] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<"ai" | "activity">("ai");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab !== "ai") return;

    setVisibleIds([]);
    let timeouts: NodeJS.Timeout[] = [];
    let delay = 800;

    aiMessages.forEach((msg) => {
      if (msg.type === "ai") {
        timeouts.push(setTimeout(() => setIsTyping(true), delay - 800));
      }
      timeouts.push(
        setTimeout(() => {
          setIsTyping(false);
          setVisibleIds((prev) => [...prev, msg.id]);
        }, delay)
      );
      delay += msg.type === "ai" ? 2500 : 1500;
    });

    return () => timeouts.forEach(clearTimeout);
  }, [activeTab]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIds, isTyping]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6"
          >
            <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
              Live Demo
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient-subtle mb-5 leading-[1.05]"
          >
            Your AI teammate in action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            See how Nexus AI handles real workflows in real-time.
          </motion.p>
        </div>

        {/* Demo Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Tabs */}
            <div className="flex items-center gap-1 p-1.5 border-b border-white/[0.06] bg-white/[0.02]">
              {[
                { id: "ai" as const, label: "AI Assistant", icon: Bot },
                { id: "activity" as const, label: "Live Activity", icon: Users },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "text-white bg-white/[0.06]"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="h-[460px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === "ai" ? (
                  <motion.div
                    key="ai-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col"
                  >
                    {/* Messages */}
                    <div
                      ref={scrollRef}
                      className="flex-1 p-5 space-y-3 overflow-y-auto"
                    >
                      {aiMessages.map((msg) => {
                        if (!visibleIds.includes(msg.id)) return null;
                        return (
                          <motion.div
                            key={`msg-${msg.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                                msg.type === "user"
                                  ? "bg-violet-500/15 border border-violet-500/20 text-white"
                                  : "bg-white/[0.04] border border-white/[0.06] text-gray-200"
                              }`}
                            >
                              {msg.type === "ai" && (
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                                    <Sparkles className="w-2.5 h-2.5 text-white" />
                                  </div>
                                  <span className="text-[11px] font-semibold text-violet-300">
                                    Nexus AI
                                  </span>
                                </div>
                              )}
                              <p className="text-sm whitespace-pre-line leading-relaxed">
                                {msg.text}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}

                      {isTyping && (
                        <motion.div
                          key="typing-indicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce"
                              style={{ animationDelay: "0.15s" }}
                            />
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce"
                              style={{ animationDelay: "0.3s" }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-white/[0.06] bg-white/[0.02]">
                      <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <span className="text-sm text-gray-500 flex-1">
                          Ask AI anything about your project...
                        </span>
                        <button className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center hover:bg-violet-500/30 transition-colors">
                          <Send className="w-3.5 h-3.5 text-violet-300" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="activity-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 space-y-2 h-full overflow-y-auto"
                  >
                    {liveActivities.map((activity, i) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            activity.color === "violet"
                              ? "bg-violet-500/20 text-violet-300"
                              : activity.color === "blue"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-emerald-500/20 text-emerald-300"
                          }`}
                        >
                          {activity.user[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-300">
                            <span className="text-white font-medium">{activity.user}</span>{" "}
                            {activity.action}{" "}
                            <span className="text-violet-300">{activity.target}</span>
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">Just now</p>
                        </div>
                        {activity.status && (
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
                              activity.status === "Done"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                            }`}
                          >
                            {activity.status}
                          </span>
                        )}
                      </motion.div>
                    ))}

                    {/* Online Members */}
                    <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Currently online
                        </p>
                        <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          4 active
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {["Sarah", "Mike", "Alex", "Priya"].map((name) => (
                          <div key={name} className="relative">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                              {name[0]}
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0a12]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}