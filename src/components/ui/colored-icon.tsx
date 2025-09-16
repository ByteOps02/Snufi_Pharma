import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "error"
  | "violet"
  | "emerald"
  | "amber"
  | "sky"
  | "rose"
  | "indigo";

interface ColoredIconProps {
  Icon: LucideIcon;
  color: IconColor;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const colorClasses: Record<IconColor, string> = {
  primary: "[color:hsl(var(--icon-primary))]",
  secondary: "[color:hsl(var(--icon-secondary))]",
  success: "[color:hsl(var(--icon-success))]",
  warning: "[color:hsl(var(--icon-warning))]",
  info: "[color:hsl(var(--icon-info))]",
  error: "[color:hsl(var(--icon-error))]",
  violet: "[color:hsl(var(--icon-violet))]",
  emerald: "[color:hsl(var(--icon-emerald))]",
  amber: "[color:hsl(var(--icon-amber))]",
  sky: "[color:hsl(var(--icon-sky))]",
  rose: "[color:hsl(var(--icon-rose))]",
  indigo: "[color:hsl(var(--icon-indigo))]",
};

const ColoredIcon = ({
  Icon,
  color,
  size = 24,
  className,
  strokeWidth = 2,
}: ColoredIconProps) => {
  return (
    <Icon
      size={size}
      className={cn(colorClasses[color], className)}
      strokeWidth={strokeWidth}
    />
  );
};

export { ColoredIcon, type IconColor };
