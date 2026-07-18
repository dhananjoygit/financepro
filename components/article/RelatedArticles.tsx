import Link from "next/link";
import { articles } from "@/data/articles";

interface RelatedArticlesProps {
  currentSlug: string;
}

export default function RelatedArticles({
  currentSlug,
}: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-20 border-t pt-12">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Related Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {article.category}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {article.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}