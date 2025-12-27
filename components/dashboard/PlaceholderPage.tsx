"use client";

import { MoreHorizontal } from "lucide-react";

import { Shell } from "@/components/dashboard/Shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Shell>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View docs</DropdownMenuItem>
              <DropdownMenuItem>Contact support</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Card>
          <CardContent className="p-6 text-sm text-slate-600">
            Placeholder content for the {title} section. This page shares the same
            dashboard layout.
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
}
