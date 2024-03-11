import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface SubHeaderProps {
  label: string;
  className?: string;
}

export default function SubHeader({ label, className }: SubHeaderProps) {
  return (
    <div
      className={cn("text-[16px] leading-[170%]  text-[#270A05]   ", className)}
    >
      <p>{label}</p>
    </div>
  );
}
