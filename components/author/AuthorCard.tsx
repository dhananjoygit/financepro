import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  author: string;
}

export default function AuthorCard({
  author,
}: AuthorCardProps) {
  const authorSlug = author
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

        <Image
          src="/images/author.jpg"
          alt={author}
          width={120}
          height={120}
          className="rounded-full border-4 border-slate-100 object-cover"
        />

        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Senior Finance Editor
          </span>

          <h3 className="mt-4 text-3xl font-bold text-slate-900">
            {author}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {author} has more than 10 years of experience covering
            investing, stock markets, economic policy and personal
            finance. Their work focuses on helping readers make smarter
            financial decisions through clear, research-based reporting.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-5 text-center">

              <p className="text-3xl font-extrabold text-blue-600">
                250+
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Articles
              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5 text-center">

              <p className="text-3xl font-extrabold text-blue-600">
                10+
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Years Experience
              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5 text-center">

              <p className="text-3xl font-extrabold text-blue-600">
                Finance
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Specialist
              </p>

            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href={`/author/${authorSlug}`}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Profile
            </Link>

            <a
              href="#"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Follow on X
            </a>

            <a
              href="#"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">

        <h4 className="text-xl font-bold text-slate-900">
          More Articles by {author}
        </h4>

        <p className="mt-3 text-slate-600">
          Explore more in-depth finance articles, investing strategies,
          market analysis and economic insights written by this author.
        </p>

        <Link
          href={`/author/${authorSlug}`}
          className="mt-6 inline-flex font-semibold text-blue-600 hover:underline"
        >
          View All Articles →
        </Link>

      </div>

    </section>
  );
}