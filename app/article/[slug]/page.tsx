import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { articles } from "@/data/articles";

import Breadcrumb from "@/components/navigation/Breadcrumb";
import ReadingProgress from "@/components/ui/ReadingProgress";
import TableOfContents from "@/components/article/TableOfContents";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import AuthorCard from "@/components/author/AuthorCard";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedArticles from "@/components/article/RelatedArticles";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />

      <main className="mx-auto max-w-5xl px-6 py-10">

        <Breadcrumb
          category={article.category}
          title={article.title}
        />

        <ArticleHeader
          category={article.category}
          title={article.title}
          author={article.author}
          date={article.date}
        />

        <div className="my-10 overflow-hidden rounded-2xl">

          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={630}
            className="h-112.5 w-full object-cover"
            priority
          />

        </div>

        <TableOfContents
          items={[
            {
              id: "understanding-the-bigger-picture",
              title: "Understanding the Bigger Picture",
            },
            {
              id: "why-it-matters",
              title: "Why It Matters",
            },
            {
              id: "conclusion",
              title: "Conclusion",
            },
          ]}
        />

        <ArticleContent
          description={article.description}
        />

        <AuthorCard
          author={article.author}
        />

        <ShareButtons />

        <RelatedArticles
          currentSlug={article.slug}
        />

      </main>
    </>
  );
}