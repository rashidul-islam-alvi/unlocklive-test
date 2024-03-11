import { cn } from "@/lib/utils";
import React from "react";

interface HeaderWithLineProps {
  label: string;
  lineOne?: boolean;
  lineTwo?: boolean;
  className?: string;
}

const HeaderWithLine = ({
  label,
  className,
  lineOne,
  lineTwo,
}: HeaderWithLineProps) => {
  return (
    <div className="flex items-center gap-2">
      {lineOne && (
        <div className="w-[30px] h-[1px]  bg-gradient-to-r from-[#c5bcb9] to-[#86371C]" />
      )}
      <div>
        <p className={cn(`text-coffee text-[16px] italic`)}>{label}</p>
      </div>
      {lineTwo && (
        <div className="w-[30px] h-[1px] bg-gradient-to-r to-[#c5bcb9] from-[#86371C]" />
      )}
    </div>
  );
};

export default HeaderWithLine;
