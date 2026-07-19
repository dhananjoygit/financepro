import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "@/data/articles";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.replace("-", " ")} | Author`,
    description: `Articles written by ${slug.replace("-", " ")}.`,
  };
}

export default async function AuthorPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const authorName = slug
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  const authorArticles = articles.filter(
    (article) =>
      article.author.toLowerCase() ===
      authorName.toLowerCase()
  );

  if (authorArticles.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        <div className="flex flex-col items-center gap-6 text-center">

          <Image
            src="/images/author.jpg"
            alt={authorName}
            width={120}
            height={120}
            className="rounded-full"
          />

          <div>

            <h1 className="text-4xl font-extrabold text-slate-900">
              {authorName}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Senior Finance Editor covering investing,
              personal finance, markets and the global economy.
            </p>

          </div>

        </div>

      </div>

      <h2 className="mt-14 text-3xl font-bold text-slate-900">
        Articles by {authorName}
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {authorArticles.map((article) => (

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

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {article.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}