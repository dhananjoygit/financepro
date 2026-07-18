export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🇺🇸 Trusted Finance News
        </span>

        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight text-slate-900">
          Stay Ahead of the Financial Markets.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Expert investing insights, stock market analysis, credit card reviews,
          retirement planning, and personal finance strategies.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Explore Articles
          </button>

          <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
            Latest News
          </button>
        </div>
      </div>
    </section>
  );
}