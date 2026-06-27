import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050507] flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col px-6 py-8 lg:px-12">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-600/30 group-hover:shadow-violet-600/50 transition-all">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Nexus
            </span>
          </Link>

          <Link
            href="/"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-8">
          © {new Date().getFullYear()} Nexus Labs Inc. All rights reserved.
        </p>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden border-l border-white/[0.04]">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-30 mask-radial" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 self-start">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300">
              Trusted by 12,000+ teams worldwide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-gradient-subtle leading-[1.1] mb-6">
            Build the future,
            <br />
            together.
          </h2>

          <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-md">
            Nexus is the AI-powered collaboration platform that helps modern
            teams plan, build, and ship faster than ever.
          </p>

          {/* Testimonial Card */}
          <div className="glass rounded-2xl p-6 max-w-md">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              &ldquo;Nexus replaced Jira, Slack, and Notion for our team. The
              AI features alone save us 10+ hours every week. It&apos;s a
              game-changer.&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                SC
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Sarah Chen</p>
                <p className="text-xs text-gray-500">
                  VP of Engineering · TechScale
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/[0.04] max-w-md">
            {[
              { value: "12K+", label: "Teams" },
              { value: "2M+", label: "Tasks shipped" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}