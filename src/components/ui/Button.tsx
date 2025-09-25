import React from "react";

const buttonVariants = {
  default: "bg-emerald-500 text-white hover:bg-emerald-600",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-gray-600 bg-transparent hover:bg-gray-700",
  secondary: "bg-gray-600 text-gray-100 hover:bg-gray-700",
  ghost: "hover:bg-gray-700",
  link: "text-emerald-400 underline-offset-4 hover:underline",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${buttonVariants[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
