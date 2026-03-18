"use client";

import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarContextType = {
  activeItem: string;
  setActiveItem: (item: string) => void;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

const useNavbar = () => {
  const ctx = useContext(NavbarContext);
  if (!ctx) throw new Error("Must be used inside <Navbar>");
  return ctx;
};

export function Navbar({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <NavbarContext.Provider value={{ activeItem, setActiveItem }}>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080C12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
          {children}
        </nav>
      </header>
    </NavbarContext.Provider>
  );
}


export function NavbarLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D4FF]/10 ring-1 ring-[#00D4FF]/30">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1L12 4V10L7 13L2 10V4L7 1Z"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
          <circle cx="7" cy="7" r="2" fill="#00D4FF" />
        </svg>
      </div>
      <span className="font-mono text-sm font-semibold tracking-[0.15em] text-white">
        PHARMORIS
      </span>
    </div>
  );
}


export function NavbarMenu({ children }: { children: React.ReactNode }) {
  return <ul className="hidden items-center gap-1 md:flex">{children}</ul>;
}

export function NavbarItem({ label }: { label: string }) {
  const pathname = usePathname();

  const path = label.toLowerCase() === "dashboard" ? "/" : `/${label.toLowerCase()}`;
  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={path}
        className={`relative rounded-md px-3.5 py-1.5 text-xs font-medium transition ${
          isActive
            ? "bg-white/10 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        {isActive && (
          <span className="absolute inset-x-3 -bottom-[1px] h-px bg-[#00D4FF]/60" />
        )}
        {label}
      </Link>
    </li>
  );
}

export function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <button className="relative flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-white/5 hover:text-white">
        🔔
      </button>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#7B61FF]/30 text-xs font-semibold text-white">
        JH
      </div>
    </div>
  );
}