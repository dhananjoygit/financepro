import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedArticles from "@/components/article/RelatedArticles";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <ArticleHeader
        category={article.category}
        title={article.title}
        author={article.author}
        date={article.date}
      />

      <div className="my-10 overflow-hidden rounded-2xl">
        <img
          src={article.image}
          alt={article.title}
          className="h-[450px] w-full object-cover"
        />
      </div>

      <ArticleContent
        description={article.description}
      />

      <ShareButtons />

      <RelatedArticles
        currentSlug={article.slug}
      />

    </main>
  );
}