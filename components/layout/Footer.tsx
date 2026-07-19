import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Link
              href="/"
              className="text-3xl font-black text-slate-900"
            >
              FinancePro
            </Link>

            <p className="mt-5 leading-7 text-slate-600">
              FinancePro delivers trusted finance news,
              investing guides, market analysis and
              personal finance education for readers
              around the world.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                ▶
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Company
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/search"
                  className="transition hover:text-blue-600"
                >
                  Search
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Categories
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link
                  href="/category/investing"
                  className="transition hover:text-blue-600"
                >
                  Investing
                </Link>
              </li>

              <li>
                <Link
                  href="/category/markets"
                  className="transition hover:text-blue-600"
                >
                  Markets
                </Link>
              </li>

              <li>
                <Link
                  href="/category/economy"
                  className="transition hover:text-blue-600"
                >
                  Economy
                </Link>
              </li>

              <li>
                <Link
                  href="/category/personal-finance"
                  className="transition hover:text-blue-600"
                >
                  Personal Finance
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Legal
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link
                  href="/about/privacy-policy"
                  className="transition hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/about/terms"
                  className="transition hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/about/disclaimer"
                  className="transition hover:text-blue-600"
                >
                  Disclaimer
                </Link>
              </li>

            </ul>

          </div>

        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 FinancePro. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">

              <Link
                href="/about/privacy-policy"
                className="hover:text-blue-600"
              >
                Privacy
              </Link>

              <Link
                href="/about/terms"
                className="hover:text-blue-600"
              >
                Terms
              </Link>

              <Link
                href="/about/disclaimer"
                className="hover:text-blue-600"
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}