import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

export default function ArticleCard({
  slug,
  category,
  title,
  description,
  author,
  date,
  image,
}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <Link href={`/article/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-56 w-full object-cover"
        />
      </Link>

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {category}
        </span>

        <Link href={`/article/${slug}`}>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 hover:text-blue-600">
            {title}
          </h2>
        </Link>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        <Link
          href={`/article/${slug}`}
          className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
        >
          Read Full Article →
        </Link>

      </div>
    </article>
  );
}