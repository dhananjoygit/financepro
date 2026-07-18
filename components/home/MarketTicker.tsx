export default function MarketTicker() {
  const markets = [
    {
      name: "S&P 500",
      value: "6,245.20",
      change: "+1.28%",
      color: "text-green-600",
    },
    {
      name: "NASDAQ",
      value: "20,640.33",
      change: "+0.94%",
      color: "text-green-600",
    },
    {
      name: "Dow Jones",
      value: "44,520.78",
      change: "+0.72%",
      color: "text-green-600",
    },
    {
      name: "Bitcoin",
      value: "$118,450",
      change: "+2.40%",
      color: "text-green-600",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {markets.map((market) => (
            <div
              key={market.name}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:shadow-md"
            >
              <p className="text-sm text-gray-500">
                {market.name}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {market.value}
              </h3>

              <p className={`mt-1 text-sm font-semibold ${market.color}`}>
                ▲ {market.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}