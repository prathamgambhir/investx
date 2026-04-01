"use client";

import type { ReactNode } from "react";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

type IconButtonProps = {
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
};

export function IconButton({
  icon,
  className,
  onClick,
  ariaLabel,
}: IconButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("rounded-full", className)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </Button>
  );
}

