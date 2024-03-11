import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PrimaryButtonProps {
  className?: string;
  buttonLabel: string;
}

export default function PrimaryButton({
  className,
  buttonLabel,
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "max-w-[1366px] px-[30px] py-[18px] bg-[#86371C] rounded-[12px] text-white",
        className
      )}
    >
      {buttonLabel}
    </button>
  );
}
