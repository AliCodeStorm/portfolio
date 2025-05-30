"use client";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useState, useEffect } from "react";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const [isClient, setIsClient] = useState(false);
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  if (!isClient) {
    return (
      <Component className={cn("text-white", className)} {...props}>
        {content}
      </Component>
    );
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex text-white",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow", 
        className,
      )}
      data-text={content} 
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
