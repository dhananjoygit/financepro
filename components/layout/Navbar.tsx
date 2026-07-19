import Link from "next/link";

const navItems = [
  { name: "Markets", href: "/category/markets" },
  { name: "Investing", href: "/category/investing" },
  { name: "Economy", href: "/category/economy" },
  { name: "Retirement", href: "/category/retirement" },
  { name: "Credit Cards", href: "/category/credit-cards" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-8">

          <Link
            href="/"
            className="text-2xl font-extrabold text-slate-900"
          >
            FinancePro
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>

        <div className="flex items-center gap-4">

          <Link
            href="/search"
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            🔍 Search
          </Link>

        </div>

      </div>
    </nav>
  );
}