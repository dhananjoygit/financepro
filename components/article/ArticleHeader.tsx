import Link from "next/link";

interface ArticleHeaderProps {
  category: string;
  title: string;
  author: string;
  date: string;
}

export default function ArticleHeader({
  category,
  title,
  author,
  date,
}: ArticleHeaderProps) {
  return (
    <header className="mb-12">

      {/* Breadcrumb */}

      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >

        <Link
          href="/"
          className="transition hover:text-blue-600"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
          className="transition hover:text-blue-600"
        >
          {category}
        </Link>

        <span>/</span>

        <span className="font-medium text-slate-700">
          Article
        </span>

      </nav>

      {/* Category */}

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
        {category}
      </span>

      {/* Title */}

      <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:mt-6 lg:text-5xl">
        {title}
      </h1>

      {/* Meta */}

      <div className="mt-6 flex flex-col gap-3 text-sm text-gray-600 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">

        <div>
          <span className="font-semibold">
            Author:
          </span>{" "}
          {author}
        </div>

        <div>
          <span className="font-semibold">
            Published:
          </span>{" "}
          {date}
        </div>

        <div>
          <span className="font-semibold">
            Reading Time:
          </span>{" "}
          5 min read
        </div>

      </div>

    </header>
  );
}