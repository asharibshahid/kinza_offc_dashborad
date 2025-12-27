"use client";

import type { Bot } from "@/lib/mock";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

type BotsTableProps = {
  bots: Bot[];
  onTogglePublic: (id: string) => void;
};

export function BotsTable({ bots, onTogglePublic }: BotsTableProps) {
  return (
    <Card className="border border-border">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="hover:bg-slate-50">
              <TableHead className="w-[60px] text-xs font-semibold uppercase tracking-wider text-slate-500">
                #
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Bot
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                ID
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Model
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Created At
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Updated At
              </TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                Public
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bots.map((bot, index) => (
              <TableRow key={bot.id} className="h-14">
                <TableCell className="text-sm text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </TableCell>
                <TableCell className="text-sm font-semibold text-slate-900">
                  {bot.name}
                </TableCell>
                <TableCell className="text-sm text-slate-600">{bot.id}</TableCell>
                <TableCell className="text-sm text-slate-600">{bot.model}</TableCell>
                <TableCell className="text-sm text-slate-600">
                  {bot.createdAt}
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {bot.updatedAt}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <Switch
                      checked={bot.public}
                      onCheckedChange={() => onTogglePublic(bot.id)}
                      className="data-[state=checked]:bg-emerald-500"
                      aria-label={`Toggle ${bot.name} public`}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
