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
    <header className="mb-10">

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {category}
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-slate-900">
        {title}
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-600">

        <div>
          <span className="font-semibold">Author:</span>{" "}
          {author}
        </div>

        <div>
          <span className="font-semibold">Published:</span>{" "}
          {date}
        </div>

        <div>
          <span className="font-semibold">Reading Time:</span>{" "}
          5 min read
        </div>

      </div>

    </header>
  );
}