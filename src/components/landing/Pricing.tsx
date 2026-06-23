"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals exploring Nexus",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Up to 3 workspaces",
      "5 team members",
      "Basic task management",
      "10 AI queries/day",
      "Community support",
      "1 GB storage",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams that ship fast",
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      "Unlimited workspaces",
      "Up to 50 members",
      "Advanced kanban & automations",
      "Unlimited AI queries",
      "Real-time collaboration",
      "Priority support",
      "50 GB storage",
      "Advanced analytics",
      "Custom workflows",
      "API access",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations at scale",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Everything in Pro",
      "Unlimited members",
      "SSO / SAML / SCIM",
      "Dedicated account manager",
      "Unlimited storage",
      "Custom integrations",
      "99.99% SLA",
      "Advanced admin controls",
      "Audit logs",
      "On-premise deployment",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-dots opacity-20 mask-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6"
          >
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient-subtle mb-5 leading-[1.05]"
          >
            Simple pricing that scales with you
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Start free. No credit card required. Cancel anytime.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl glass">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
                !isAnnual ? "bg-white/[0.08] text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                isAnnual ? "bg-white/[0.08] text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Annual
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.popular
                  ? "glass-strong border-violet-500/30 shadow-2xl shadow-violet-500/10"
                  : "glass hover:bg-white/[0.04]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow-lg shadow-violet-600/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/[0.06]">
                {plan.monthlyPrice === null ? (
                  <div className="text-4xl font-semibold text-white tracking-tight">Custom</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-white tracking-tight">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-gray-500">
                      /user/{isAnnual ? "mo" : "month"}
                    </span>
                  </div>
                )}
                {isAnnual && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-emerald-400 mt-1">Billed annually</p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center py-2.5 rounded-xl text-sm font-medium transition-all mb-6 ${
                  plan.popular
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.06]"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-2.5">
                {plan.features.map((feature, fi) => (
                  <li key={`${plan.id}-feat-${fi}`} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}