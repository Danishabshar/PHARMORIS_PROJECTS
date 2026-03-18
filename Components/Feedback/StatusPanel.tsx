"use client";

import { STATUS_COLOR } from "@/lib/constant";
import { StatusBarProps, StatusType } from "@/type";

export default function StatusBar({ items }: StatusBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-2 text-[11px]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            {item.status && (
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                    STATUS_COLOR[item.status]
                  } opacity-60`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    STATUS_COLOR[item.status]
                  }`}
                />
              </span>
            )}

            {item.label ? (
              <span>
                {item.label}:{" "}
                <span className="text-slate-500">{item.value}</span>
              </span>
            ) : (
              <span className="font-medium text-slate-300">
                {item.value}
              </span>
            )}
          </div>

          {index !== items.length - 1 && (
            <div className="h-3 w-px bg-white/10" />
          )}
        </div>
      ))}
    </div>
  );
}