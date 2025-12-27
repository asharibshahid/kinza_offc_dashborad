import { Github, Linkedin, Twitter } from "lucide-react";

export function FooterBar() {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <span>support@tinytalk.ai</span>
        <span>v2.8.1</span>
        <span>All rights reserved 2025</span>
      </div>
      <div className="flex items-center gap-3 text-slate-400">
        <Twitter className="h-4 w-4" />
        <Linkedin className="h-4 w-4" />
        <Github className="h-4 w-4" />
      </div>
    </div>
  );
}
