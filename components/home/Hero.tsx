import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white">

      <div className="relative mx-auto max-w-7xl px-8 py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
              Trusted Finance News
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight">
              Stay Ahead of the Financial Markets
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Breaking financial news, investing strategies,
              market analysis and personal finance guides
              designed to help you make smarter money decisions.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="/category/investing"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Explore Articles
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-slate-500 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Link>

            </div>

          </div>

          <div className="space-y-5">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase text-slate-300">
                S&P 500
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-400">
                +1.82%
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase text-slate-300">
                NASDAQ
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-400">
                +2.15%
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase text-slate-300">
                Bitcoin
              </p>

              <h3 className="mt-2 text-3xl font-bold text-orange-400">
                $118,420
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}