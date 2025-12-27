"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Bot,
  Settings,
  Database,
  MessageSquare,
  LifeBuoy,
  PlaySquare,
  Users,
  Plug,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navItems = [
  { label: "Chatbots", href: "/bots", icon: Bot },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Knowledge Base", href: "/knowledge-base", icon: Database },
  { label: "Messenger", href: "/messenger", icon: MessageSquare },
  { label: "Help Desk", href: "/help-desk", icon: LifeBuoy },
  { label: "Playground", href: "/playground", icon: PlaySquare },
  { label: "Contacts", href: "/contacts", icon: Users },
  { label: "Integrations", href: "/integrations", icon: Plug },
];

const botOptions = ["hr", "sales", "support"];

export function Sidebar() {
  const pathname = usePathname();
  const [selectedBot, setSelectedBot] = useState("hr");

  const activeHref = useMemo(() => pathname ?? "/bots", [pathname]);

  return (
    <aside className="flex h-screen w-[270px] flex-col overflow-y-auto border-r border-border bg-white px-5 py-6">
      <div className="flex items-center gap-2 px-2 pb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
          <span className="text-sm font-semibold">t</span>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">tiny talk</p>
          <p className="text-xs text-slate-500">dashboard</p>
        </div>
      </div>
      <Separator />
      <nav className="mt-6 flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900",
                isActive && "bg-slate-900 text-white hover:bg-slate-900"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-slate-500")} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Separator />
      <div className="mt-5 space-y-3 px-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Current Bot
        </p>
        <Select value={selectedBot} onValueChange={setSelectedBot}>
          <SelectTrigger className="h-9">
            <SelectValue placeholder="Select bot" />
          </SelectTrigger>
          <SelectContent>
            {botOptions.map((bot) => (
              <SelectItem key={bot} value={bot}>
                {bot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}
