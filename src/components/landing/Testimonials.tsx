"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechScale",
    content:
      "Nexus replaced Jira, Slack, and Notion for our team. The AI features alone save us 10+ hours per week. It's like having an extra team member.",
    rating: 5,
    avatar: "SC",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Marcus Williams",
    role: "CTO",
    company: "LaunchPad AI",
    content:
      "The real-time collaboration is unlike anything else. We went from async chaos to shipping 2x faster within the first month.",
    rating: 5,
    avatar: "MW",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead",
    company: "DesignCraft",
    content:
      "Finally, a tool that designers and developers both love. The whiteboard + kanban integration is pure genius.",
    rating: 5,
    avatar: "ER",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "David Kim",
    role: "Engineering Manager",
    company: "CloudSync",
    content:
      "We evaluated 15 project management tools. Nexus won because of its AI task generation and the beautiful, fast UI.",
    rating: 5,
    avatar: "DK",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "DataFlow",
    content:
      "Our remote team feels more connected than ever. The presence features and instant chat make us feel like we're in one room.",
    rating: 5,
    avatar: "PS",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "James O'Brien",
    role: "Head of Product",
    company: "ScaleUp",
    content:
      "The analytics dashboard gives us insights we never had before. We can actually predict bottlenecks now. Game changer.",
    rating: 5,
    avatar: "JO",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-pink-500/20 mb-6"
          >
            <Star className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            <span className="text-sm text-gray-300">Loved by 12,000+ Teams</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Don&apos;t take our word, </span>
            <span className="text-gradient">take theirs</span>
          </motion.h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative glass rounded-2xl p-7 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-white/[0.04] absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}