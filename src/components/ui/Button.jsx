import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-poppins font-medium transition-all duration-300 active:scale-[0.97] cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#00E5D4] text-[#120933] shadow-[0_0_0_0_rgba(0,229,212,0.4)] hover:shadow-[0_0_12px_2px_rgba(0,229,212,0.55)] hover:bg-[#00d8c9]",
        secondary:
          "border border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-[2px]",
        ghost:
          "text-white hover:bg-white/10",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "lg"
    }
  }
)

export function Button({ className, variant, size, radius, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, radius }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
