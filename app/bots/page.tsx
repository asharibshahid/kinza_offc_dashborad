"use client";

import { useState } from "react";

import { Shell } from "@/components/dashboard/Shell";
import { TopSection } from "@/components/dashboard/TopSection";
import { BotsTable } from "@/components/dashboard/BotsTable";
import { PlansBanner } from "@/components/dashboard/PlansBanner";
import { FooterBar } from "@/components/dashboard/FooterBar";
import { initialBots, type Bot } from "@/lib/mock";

export default function BotsPage() {
  const [bots, setBots] = useState<Bot[]>(initialBots);

  const handleCreate = (bot: Bot) => {
    setBots((prev) => [...prev, bot]);
  };

  const handleTogglePublic = (id: string) => {
    setBots((prev) =>
      prev.map((bot) =>
        bot.id === id ? { ...bot, public: !bot.public } : bot
      )
    );
  };

  return (
    <Shell>
      <div className="space-y-8">
        <TopSection onCreate={handleCreate} />
        <BotsTable bots={bots} onTogglePublic={handleTogglePublic} />
        <PlansBanner />
        <FooterBar />
      </div>
    </Shell>
  );
}
