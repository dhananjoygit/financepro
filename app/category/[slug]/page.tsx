import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    title: `${slug} Articles`,
    description: `Latest ${slug} finance articles.`,
  };
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const filteredArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() ===
      slug.toLowerCase()
  );

  if (filteredArticles.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-extrabold capitalize text-slate-900">
        {slug.replace("-", " ")}
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Browse the latest articles from this category.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {filteredArticles.map((article) => (

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

    </main>
  );
}