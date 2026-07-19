import Link from "next/link";

export default function BreakingNews() {
  return (
    <section className="border-y border-red-200 bg-red-50">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">

        <span className="rounded bg-red-600 px-3 py-1 text-sm font-bold text-white">
          BREAKING
        </span>

        <Link
          href="/article/americas-34-trillion-debt-bomb"
          className="font-medium text-slate-800 hover:text-red-600"
        >
          America's National Debt Surpasses $34 Trillion. What It Means for Investors →
        </Link>

      </div>
    </section>
  );
}