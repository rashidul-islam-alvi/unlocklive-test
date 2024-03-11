import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface GlobalContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function GlobalContainer({
  className,
  children,
}: GlobalContainerProps) {
  return (
    <div className={cn("max-w-[1366px] px-5 lg:px-0 m-auto", className)}>
      {children}
    </div>
  );
}
