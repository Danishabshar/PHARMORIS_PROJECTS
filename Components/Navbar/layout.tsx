"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "#", active: true },
  { label: "Insights", href: "#", active: false },
  { label: "Supply", href: "#", active: false },
  { label: "Settings", href: "#", active: false },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080C12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D4FF]/10 ring-1 ring-[#00D4FF]/30">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L12 4V10L7 13L2 10V4L7 1Z"
                stroke="#00D4FF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="7" r="2" fill="#00D4FF" />
            </svg>
          </div>
          <span className="font-mono text-sm font-semibold tracking-[0.15em] text-white">
            PHARMORIS
          </span>
        </div>

        {/* Nav links */}
        <ul className="hidden items-center gap-1 md:flex" role="navigation">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className={`relative rounded-md px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/50 ${
                  activeItem === item.label
                    ? "bg-white/8 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeItem === item.label && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-[#00D4FF]/60" />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="relative flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/50"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M7.5 1.5a4.5 4.5 0 00-4.5 4.5v3l-1 1.5h11l-1-1.5V6A4.5 4.5 0 007.5 1.5zM6 11.5a1.5 1.5 0 003 0"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#7B61FF]/30 ring-1 ring-white/10 text-xs font-semibold text-white">
            JH
          </div>
        </div>
      </nav>
    </header>
  );
}