"use client";

import { CreateBotDialog } from "@/components/dashboard/CreateBotDialog";
import type { Bot } from "@/lib/mock";

type TopSectionProps = {
  onCreate: (bot: Bot) => void;
};

export function TopSection({ onCreate }: TopSectionProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Get Started</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Manage your Tiny Bots, review model assignments, and share access with
          your team. Create a new bot to add a fresh conversational experience.
        </p>
      </div>
      <div className="flex items-start md:pt-1">
        <CreateBotDialog onCreate={onCreate} />
      </div>
    </div>
  );
}
