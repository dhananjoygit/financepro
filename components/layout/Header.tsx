"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-white"
        >
          FinancePro
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={
                  active
                    ? "text-blue-400 font-semibold"
                    : "text-white font-medium transition hover:text-blue-400"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/search"
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2 font-medium text-white transition hover:border-blue-500 hover:bg-slate-800"
          >
            🔍 Search
          </Link>

          <ThemeToggle />

        </div>

      </div>
    </header>
  );
}