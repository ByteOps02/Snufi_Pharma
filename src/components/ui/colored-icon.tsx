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
  primary: "text-icon-primary",
  secondary: "text-icon-secondary",
  success: "text-icon-success",
  warning: "text-icon-warning",
  info: "text-icon-info",
  error: "text-icon-error",
  violet: "text-icon-violet",
  emerald: "text-icon-emerald",
  amber: "text-icon-amber",
  sky: "text-icon-sky",
  rose: "text-icon-rose",
  indigo: "text-icon-indigo",
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
