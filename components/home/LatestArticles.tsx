import ArticleCard from "@/components/shared/ArticleCard";
import { articles } from "@/data/articles";

export default function LatestArticles() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Latest Articles
        </h2>

        <p className="mt-2 text-gray-600">
          Stay updated with the latest finance news, investing insights and
          economic analysis.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            slug={article.slug}
            category={article.category}
            title={article.title}
            description={article.description}
            author={article.author}
            date={article.date}
            image={article.image}
          />
        ))}
      </div>
    </section>
  );
}