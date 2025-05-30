"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#808080", 
      duration = "1.5s", 
      ...props
    },
    ref
  ) => {
    return (
      <button
        suppressHydrationWarning={true} 
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground",
          className
        )}
        style={
          {
            "--pulse-color": pulseColor, // Customizable pulse color
            "--duration": duration, // Customizable duration
          } as React.CSSProperties
        }
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <div
          className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg"
          style={{
            backgroundColor: `var(--pulse-color)`, 
            animationDuration: `var(--duration)`, 
          }}
        />
      </button>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
