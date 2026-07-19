export default function MarketTicker() {
  const markets = [
    {
      name: "S&P 500",
      value: "6,421.12",
      change: "+1.82%",
      color: "text-green-600",
    },
    {
      name: "NASDAQ",
      value: "22,318.44",
      change: "+2.15%",
      color: "text-green-600",
    },
    {
      name: "DOW JONES",
      value: "45,103.76",
      change: "+0.94%",
      color: "text-green-600",
    },
    {
      name: "BITCOIN",
      value: "$118,420",
      change: "+3.28%",
      color: "text-green-600",
    },
    {
      name: "GOLD",
      value: "$3,428",
      change: "-0.42%",
      color: "text-red-600",
    },
    {
      name: "US DOLLAR",
      value: "98.42",
      change: "+0.28%",
      color: "text-green-600",
    },
  ];

  return (
    <section className="my-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Live Market Overview
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((market) => (
          <div
            key={market.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {market.name}
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              {market.value}
            </h3>

            <p className={`mt-3 text-lg font-semibold ${market.color}`}>
              {market.change}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}