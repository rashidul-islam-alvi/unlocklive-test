import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface OulinedButtonProps {
  className?: string;
  buttonLabel: string;
}

export default function OutlinedButton({
  className,
  buttonLabel,
}: OulinedButtonProps) {
  return (
    <button
      className={cn(
        "max-w-[1366px] px-[30px] py-[18px] font-semibold border-[#86371C] border-2 rounded-[12px] text-[#86371C]",
        className
      )}
    >
      {buttonLabel}
    </button>
  );
}
