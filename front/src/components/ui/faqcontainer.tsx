"use client";

import React from "react";
import { cn } from "@/lib/utils";

const FaqContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("w-screen bg-white text-black relative", className)}
        {...props}
    />
))
FaqContainer.displayName = "FaqContainer"

export default FaqContainer