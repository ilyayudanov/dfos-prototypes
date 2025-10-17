"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmailDomainSuggestionsProps {
  className?: string;
  onDomainSelect?: (domain: string) => void;
  domains?: string[];
}

export function EmailDomainSuggestions({ 
  className,
  onDomainSelect,
  domains = ["@gmail.com", "@icloud.com", "@outlook.com"]
}: EmailDomainSuggestionsProps) {
  return (
    <div className={cn("flex gap-[14px] items-start", className)}>
      {domains.map((domain) => (
        <Button
          key={domain}
          variant="outline"
          size="sm"
          className="bg-[rgba(255,255,255,0.1)] border-neutral-300 px-2 py-1 h-6 text-xs font-medium text-neutral-950 tracking-[0.18px] rounded"
          onClick={() => onDomainSelect?.(domain)}
        >
          {domain}
        </Button>
      ))}
    </div>
  );
}

