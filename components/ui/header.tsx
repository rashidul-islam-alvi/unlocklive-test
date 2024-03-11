import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  label: string;
  className?: string;
}

export default function Header({ label, className }: HeaderProps) {
  return (
    <div
      className={cn(
        "text-[60px] leading-[120%] font-bakilda text-[#270A05] ",
        className
      )}
    >
      <h2>{label}</h2>
    </div>
  );
}
