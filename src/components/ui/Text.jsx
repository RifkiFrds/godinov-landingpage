import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Heading Component
const headingVariants = cva(
  "font-poppins font-semibold tracking-tight text-white",
  {
    variants: {
      size: {
        h1: "text-4xl md:text-6xl leading-tight mt-20",
        h2: "text-3xl md:text-5xl leading-snug",
        h3: "text-2xl md:text-4xl leading-snug",
        h4: "text-xl md:text-3xl leading-snug",
      },
    },
    defaultVariants: { size: "h1" },
  }
);

export function Heading({ className, size, children }) {
  const Component = size || "h1";
  return (
    <Component className={cn(headingVariants({ size }), className)}>
      {children}
    </Component>
  );
}


// Paragraph Component
const paragraphVariants = cva(
  "font-poppins text-godinov-softgray leading-relaxed",
  {
    variants: {
      size: {
        sm: "text-sm md:text-base",
        base: "text-base md:text-lg",
        lg: "text-lg md:text-xl",
      },
    },
    defaultVariants: { size: "base" },
  }
);

export function Paragraph({ className, size, children }) {
  return (
    <p className={cn(paragraphVariants({ size }), className)}>
      {children}
    </p>
  );
}
