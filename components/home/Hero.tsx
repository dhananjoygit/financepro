import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 opacity-95" />


      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">


        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">


          <div>


            <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
              Trusted Finance News
            </span>



            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:mt-8 lg:text-6xl">
              Stay Ahead of the Financial Markets
            </h1>



            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl lg:leading-9">
              Breaking financial news, investing strategies,
              market analysis and personal finance guides
              designed to help you make smarter money decisions.
            </p>



            <div className="mt-8 flex flex-col gap-4 sm:flex-row">


              <Link
                href="/category/investing"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-semibold transition hover:bg-blue-700"
              >
                Explore Articles
              </Link>



              <Link
                href="/about"
                className="rounded-xl border border-slate-500 px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Link>


            </div>


          </div>




          <div className="grid gap-5">


            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur sm:p-6">

              <p className="text-sm uppercase tracking-wider text-slate-300">
                S&P 500
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400 sm:text-3xl">
                +1.82%
              </h3>

            </div>




            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur sm:p-6">

              <p className="text-sm uppercase tracking-wider text-slate-300">
                NASDAQ
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400 sm:text-3xl">
                +2.15%
              </h3>

            </div>





            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur sm:p-6">

              <p className="text-sm uppercase tracking-wider text-slate-300">
                BITCOIN
              </p>

              <h3 className="mt-2 text-2xl font-bold text-orange-400 sm:text-3xl">
                $118,420
              </h3>

            </div>



          </div>



        </div>


      </div>


    </section>
  );
}