import * as React from "react"

import { cn } from "@/lib/utils"


const CheckMark = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            " w-[40px] h-[40px] bg-[#00B200] rounded-full flex items-center justify-center p-2",
            className
        )}
        {...props}
    />
))
CheckMark.displayName = "CheckMark"

const PendingMark = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-[40px] h-[40px] rounded-full flex items-center justify-center p-2 border-4 border-lightblue",
            className
        )}
        {...props}
    />
))
PendingMark.displayName = "PendingMark"

export { CheckMark, PendingMark }

