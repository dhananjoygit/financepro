import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-black text-slate-900">
              FinancePro
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Trusted finance news, investing guides,
              market analysis and economic insights
              for readers across the United States.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-slate-900">
              Company
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-slate-900">
              Categories
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>Markets</li>
              <li>Investing</li>
              <li>Economy</li>
              <li>Retirement</li>
              <li>Credit Cards</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-slate-900">
              Newsletter
            </h3>

            <p className="mb-4 text-slate-600">
              Weekly finance insights delivered to your inbox.
            </p>

            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © 2026 FinancePro. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}