import Link from "next/link";
import { articles } from "@/data/articles";

export default function TrendingTopics() {
  return (
    <section className="my-20">
      <div className="mb-10">
        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
          🔥 Trending Now
        </span>

        <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
          Most Popular Stories
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Discover the finance articles readers are enjoying the most.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {articles.slice(0, 3).map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {article.category}
              </span>

              <span className="text-4xl font-bold text-slate-200">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {article.title}
            </h3>

            <p className="mt-4 text-slate-600">
              {article.description}
            </p>

            <div className="mt-8 flex justify-between text-sm text-slate-500">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}