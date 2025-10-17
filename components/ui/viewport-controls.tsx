"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewportControlsProps {
  className?: string;
  onViewportChange?: (viewport: 'mobile' | 'desktop') => void;
  showInfo?: boolean;
  onInfoToggle?: (show: boolean) => void;
}

export function ViewportControls({ className, onViewportChange, showInfo, onInfoToggle }: ViewportControlsProps) {
  const [activeViewport, setActiveViewport] = useState<'mobile' | 'desktop'>('mobile');

  const handleViewportChange = (viewport: 'mobile' | 'desktop') => {
    setActiveViewport(viewport);
    onViewportChange?.(viewport);
  };

  const handleInfoToggle = () => {
    const newShow = !showInfo;
    onInfoToggle?.(newShow);
  };

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg p-2 shadow-lg",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className="flex border border-slate-200 rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-8 px-3 text-xs rounded-r-none border-r",
              activeViewport === 'mobile' && "bg-slate-100 text-slate-900"
            )}
            onClick={() => handleViewportChange('mobile')}
          >
            📱 Mobile
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-8 px-3 text-xs rounded-l-none",
              activeViewport === 'desktop' && "bg-slate-100 text-slate-900"
            )}
            onClick={() => handleViewportChange('desktop')}
          >
            💻 Desktop
          </Button>
        </div>
        
        {/* Info Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleInfoToggle}
          className={cn(
            "h-8 w-8 p-0 text-slate-600 hover:text-slate-900",
            showInfo && "bg-slate-100 text-slate-900"
          )}
          title="Toggle component info"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

interface MobileConstraintProps {
  children: React.ReactNode;
  viewport: 'mobile' | 'desktop';
  className?: string;
}

export function MobileConstraint({ children, viewport, className }: MobileConstraintProps) {
  return (
    <div className={cn(
      "transition-all duration-300 ease-in-out",
      viewport === 'mobile' 
        ? "max-w-[384px] mx-auto min-h-screen" 
        : "w-full min-h-screen",
      className
    )}>
      {children}
    </div>
  );
}
