"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export function PlansBanner() {
  const { toast } = useToast();

  return (
    <Card className="flex flex-col gap-4 border border-border bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <p className="text-base font-semibold text-slate-900">
          Feeling ready? Check out our plans for your team.
        </p>
        <p className="text-sm text-slate-600">
          Upgrade to unlock additional bot slots and analytics.
        </p>
      </div>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Coming soon",
            description: "Subscriptions will be available shortly.",
          })
        }
      >
        Subscriptions
      </Button>
    </Card>
  );
}
