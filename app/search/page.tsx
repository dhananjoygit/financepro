"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { articles } from "@/data/articles";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const keyword = query.toLowerCase();

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(keyword) ||
        article.description.toLowerCase().includes(keyword) ||
        article.category.toLowerCase().includes(keyword)
      );
    });
  }, [query]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-extrabold text-slate-900">
        Search Articles
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Search finance news, investing guides and market analysis.
      </p>

      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-8 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-blue-600"
      />

      {query.length > 0 && (
        <p className="mt-6 text-slate-600">
          {results.length} result(s) found
        </p>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {results.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {article.category}
              </span>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {article.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {article.description}
              </p>

            </div>

          </Link>
        ))}

      </div>

      {query.length > 0 && results.length === 0 && (
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            No articles found
          </h2>

          <p className="mt-3 text-slate-600">
            Try another keyword.
          </p>

        </div>
      )}

    </main>
  );
}