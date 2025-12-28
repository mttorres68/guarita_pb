import React from "react";

const badgeVariants = {
  default: "bg-blue-500 text-white",
  secondary: "bg-gray-600 text-gray-100",
  destructive: "bg-red-500 text-white",
  success: "bg-emerald-500 text-white",
  warning: "bg-yellow-500 text-gray-900",
  info: "bg-sky-500 text-white",
  outline: "text-gray-100 border border-gray-600",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${badgeVariants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
