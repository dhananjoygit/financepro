import Link from "next/link";

import { navigation } from "@/data/navigation";

import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          FinancePro
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-300"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-slate-300 bg-white px-5 py-2 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
            Search
          </button>

          <ThemeToggle />

        </div>

      </div>

    </header>
  );
}