import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-target",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light hover:shadow-lg hover:scale-105 active:scale-95",
        destructive: "bg-danger text-white hover:shadow-lg hover:scale-105 active:scale-95",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        ghost: "hover:bg-muted hover:text-foreground hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        // Voice-specific variants
        voice: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-110 active:scale-95 animate-gentle-bounce",
        emergency: "bg-danger text-white hover:shadow-xl hover:scale-110 active:scale-95 font-bold",
        // Accessibility variants
        large: "h-16 px-8 text-lg font-semibold",
        comfortable: "h-12 px-6 text-base"
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-sm",
        lg: "h-12 rounded-lg px-6 text-base",
        xl: "h-16 rounded-lg px-8 text-lg",
        icon: "h-10 w-10",
        "icon-lg": "h-12 w-12",
        "icon-xl": "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
