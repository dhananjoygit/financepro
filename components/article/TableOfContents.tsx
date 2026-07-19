import Link from "next/link";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
  }[];
}

export default function TableOfContents({
  items,
}: TableOfContentsProps) {
  return (
    <aside className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h2 className="text-2xl font-bold text-slate-900">
        Contents
      </h2>

      <ul className="mt-6 space-y-4">

        {items.map((item) => (

          <li key={item.id}>

            <Link
              href={`#${item.id}`}
              className="text-slate-700 transition hover:text-blue-600"
            >
              • {item.title}
            </Link>

          </li>

        ))}

      </ul>

    </aside>
  );
}