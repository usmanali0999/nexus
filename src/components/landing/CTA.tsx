"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)]" />

          {/* Floating orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

          {/* Content */}
          <div className="relative py-16 md:py-20 px-6 md:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-5 tracking-[-0.03em] leading-[1.05]"
            >
              Ready to transform how
              <br />
              your team works?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10"
            >
              Join 12,000+ teams already using Nexus to collaborate smarter and ship faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-xl shadow-xl hover:bg-gray-100 transition-all"
              >
                Start for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all"
              >
                Schedule a demo
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs text-white/60 mt-6"
            >
              No credit card required · Free 14-day trial · Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}