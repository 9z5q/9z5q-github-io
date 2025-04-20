"use client";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const Snippet = ({
  text,
  className,
  dark,
}: {
  text: string;
  className?: string;
  dark?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-md border pb-[10px] pt-[10px] pl-3 flex items-center",
        dark ? "bg-white text-zinc-950" : "bg-zinc-950 text-white",
        className,
      )}
    >
      <pre className="flex-grow overflow-x-auto whitespace-pre pr-10">
        <span className="select-none">$&nbsp;</span>
        <span className="text-left">{text}</span>
      </pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1500);
          });
        }}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer w-10 h-full grid place-content-center rounded-md",
          dark ? "bg-white" : "bg-zinc-950",
        )}
      >
        <Check
          size={16}
          className={cn(
            "text-bold transition scale-0 duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            copied ? "scale-1" : "scale-0 opacity-0",
          )}
        />
        <Copy
          size={16}
          className={cn(
            "text-bold transition scale-1 duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            copied ? "scale-0 opacity-0" : "scale-1",
          )}
        />
        <span className="sr-only">Copy</span>
      </button>
    </div>
  );
};

export default Snippet;
