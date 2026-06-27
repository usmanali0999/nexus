import { auth } from "@/auth";
import { FolderKanban, CheckCircle2, Clock, Users, Plus, ArrowUpRight, Sparkles } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "there";

  const stats = [
    {
      label: "Active Projects",
      value: "12",
      change: "+2",
      icon: FolderKanban,
      color: "violet",
    },
    {
      label: "Tasks Completed",
      value: "248",
      change: "+18",
      icon: CheckCircle2,
      color: "emerald",
    },
    {
      label: "In Progress",
      value: "16",
      change: "+4",
      icon: Clock,
      color: "amber",
    },
    {
      label: "Team Members",
      value: "8",
      change: "+1",
      icon: Users,
      color: "blue",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white mb-2">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-sm text-gray-400">
            Here&apos;s what&apos;s happening across your workspaces today.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-all">
          <Plus className="w-4 h-4" />
          New project
        </button>
      </div>

      {/* AI Insight Card */}
      <div className="relative mb-8 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-indigo-600/10" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative p-6 border border-violet-500/20 rounded-2xl backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-600/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-sm font-semibold text-white">AI Insight</h3>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-violet-500/15 text-violet-300 border border-violet-500/20">
                  New
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Your team velocity is <span className="text-emerald-400 font-medium">23% higher</span> than last week.{" "}
                <span className="text-white">3 tasks</span> are at risk of missing their deadline — consider reassigning resources.
              </p>
            </div>

            <button className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => {
          const colors = colorMap[stat.color];
          return (
            <div
              key={stat.label}
              className="group relative p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                  <stat.icon className={`w-4 h-4 ${colors.text}`} />
                </div>
                <span className="text-xs font-medium text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">
                  {stat.change}
                </span>
              </div>

              <div className="text-2xl font-semibold text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-white">Recent activity</h2>
            <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
              View all
            </button>
          </div>

          <div className="space-y-1">
            {[
              { user: "Sarah Chen", action: "completed", target: "Design homepage mockup", time: "2 min ago", color: "from-violet-500 to-purple-600" },
              { user: "Mike Ross", action: "created", target: "API authentication endpoint", time: "1 hour ago", color: "from-blue-500 to-cyan-600" },
              { user: "Emily Park", action: "commented on", target: "Mobile responsive layout", time: "3 hours ago", color: "from-emerald-500 to-teal-600" },
              { user: "Alex Kim", action: "assigned", target: "Bug fix #2451", time: "5 hours ago", color: "from-amber-500 to-orange-600" },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-all"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {activity.user.split(" ").map((n) => n[0]).join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-300">
                    <span className="text-white font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="text-violet-300">{activity.target}</span>
                  </p>
                </div>

                <span className="text-xs text-gray-500 flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-base font-semibold text-white mb-6">Quick actions</h2>

          <div className="space-y-2">
            {[
              { label: "Create new project", icon: FolderKanban, color: "violet" },
              { label: "Invite team member", icon: Users, color: "blue" },
              { label: "Schedule a meeting", icon: Clock, color: "emerald" },
              { label: "Browse templates", icon: Sparkles, color: "amber" },
            ].map((action) => {
              const colors = colorMap[action.color];
              return (
                <button
                  key={action.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all text-left group"
                >
                  <div className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                    <action.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors flex-1">
                    {action.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}