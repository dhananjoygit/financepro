import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function EditorsPick() {
  return (
    <section className="py-16">

      <div className="mb-10">

        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          ⭐ Editor&apos;s Choice
        </span>

        <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Hand Picked Finance Stories
        </h2>

        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Our editors selected these articles to help you better understand today&apos;s financial world.
        </p>

      </div>


      <div className="grid gap-8 md:grid-cols-2">

        {articles.slice(2, 6).map((article) => (

          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <Image
              src={article.image}
              alt={article.title}
              width={128}
              height={128}
              className="h-32 w-32 rounded-2xl object-cover"
            />



            <div className="flex-1">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {article.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}