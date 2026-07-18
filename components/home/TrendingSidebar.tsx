export default function TrendingSidebar() {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        🔥 Trending News
      </h2>

      <div className="space-y-5">

        <div className="border-b pb-4">
          <p className="text-sm text-blue-600 font-semibold">
            Economy
          </p>

          <h3 className="mt-2 font-semibold hover:text-blue-600 cursor-pointer">
            The U.S. $34 Trillion Debt Crisis Explained
          </h3>
        </div>

        <div className="border-b pb-4">
          <p className="text-sm text-blue-600 font-semibold">
            Investing
          </p>

          <h3 className="mt-2 font-semibold hover:text-blue-600 cursor-pointer">
            Why the Stock Market Keeps Reaching New Highs
          </h3>
        </div>

        <div className="border-b pb-4">
          <p className="text-sm text-blue-600 font-semibold">
            Banking
          </p>

          <h3 className="mt-2 font-semibold hover:text-blue-600 cursor-pointer">
            Best High Yield Savings Accounts in 2026
          </h3>
        </div>

        <div>
          <p className="text-sm text-blue-600 font-semibold">
            Retirement
          </p>

          <h3 className="mt-2 font-semibold hover:text-blue-600 cursor-pointer">
            How to Build a Million Dollar Retirement Portfolio
          </h3>
        </div>

      </div>
    </aside>
  );
}