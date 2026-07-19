import Link from "next/link";
import { articles } from "@/data/articles";

export default function LatestArticles() {
  return (
    <section className="my-16">

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Latest Articles
        </h2>

        <Link
          href="/category"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          View All →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {articles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <img
              src={article.image}
              alt={article.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-7">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>

              <Link
                href={`/article/${article.slug}`}
                className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Read More
              </Link>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}