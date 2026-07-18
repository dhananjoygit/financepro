export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            About Us
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Building Trust Through
            <br />
            Financial Knowledge
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            FinancePro delivers trusted financial news, investing insights,
            personal finance education and market analysis to help readers
            make smarter financial decisions.
          </p>

        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-5xl">📈</div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Market Analysis
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Daily coverage of financial markets,
                stocks, ETFs and global economic events.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-5xl">💰</div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Investing
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Practical investing guides designed for
                beginners and experienced investors.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-5xl">🏦</div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Personal Finance
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Budgeting, retirement planning,
                credit cards and wealth building strategies.
              </p>
            </div>

          </div>

          <div className="mt-20 rounded-3xl bg-white p-12 shadow-sm">

            <h2 className="text-4xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-700">
              Our mission is simple. We make finance easier to understand.
              Every article is written with clarity, accuracy and practical
              value so readers can confidently make informed financial
              decisions.
            </p>

            <p className="mt-6 text-xl leading-9 text-slate-700">
              Whether you're following the stock market, planning for
              retirement or learning about personal finance, FinancePro is
              committed to delivering reliable and unbiased information.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}