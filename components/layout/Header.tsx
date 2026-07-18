import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-slate-900"
        >
          FinancePro
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="rounded-xl border border-slate-300 bg-white px-5 py-2 font-semibold text-slate-700 transition hover:bg-slate-100">
          Search
        </button>

      </div>
    </header>
  );
}