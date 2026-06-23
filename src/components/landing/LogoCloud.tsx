"use client";

import { motion } from "framer-motion";

const logos = [
  "Vercel", "Stripe", "Linear", "Notion", "Figma", "Slack", "GitHub", "Discord",
];

export default function LogoCloud() {
  return (
    <section className="relative py-16 md:py-20 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-gray-500 mb-10 tracking-[0.2em] uppercase"
        >
          Powering teams at world-class companies
        </motion.p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="text-gray-600 hover:text-gray-300 transition-colors duration-300 font-semibold text-lg md:text-xl tracking-tight cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}