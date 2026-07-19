import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  title: string;
}

export default function Breadcrumb({
  category,
  title,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm"
    >
      <ol className="flex flex-wrap items-center gap-2 text-slate-500">

        <li>
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            href={`/category/${category.toLowerCase()}`}
            className="transition hover:text-blue-600"
          >
            {category}
          </Link>
        </li>

        <li>/</li>

        <li className="font-medium text-slate-900">
          {title}
        </li>

      </ol>
    </nav>
  );
}