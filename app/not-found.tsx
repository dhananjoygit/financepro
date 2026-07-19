import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-20">

      <div className="mx-auto max-w-2xl text-center">

        <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
          Error 404
        </span>

        <h1 className="mt-8 text-7xl font-black tracking-tight text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Sorry, the page you are looking for doesn&apos;t exist,
          may have been moved, or the URL was entered incorrectly.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

          <Link
            href="/search"
            className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Search Articles
          </Link>

        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h3 className="text-xl font-bold text-slate-900">
            Popular Sections
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              href="/category/investing"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow transition hover:bg-blue-600 hover:text-white"
            >
              Investing
            </Link>

            <Link
              href="/category/markets"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow transition hover:bg-blue-600 hover:text-white"
            >
              Markets
            </Link>

            <Link
              href="/category/economy"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow transition hover:bg-blue-600 hover:text-white"
            >
              Economy
            </Link>

            <Link
              href="/category/personal-finance"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow transition hover:bg-blue-600 hover:text-white"
            >
              Personal Finance
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}