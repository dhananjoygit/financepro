import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-16">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-3 text-lg text-gray-600">
          Explore our most popular finance topics.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="text-5xl">
              {category.icon}
            </div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              {category.name}
            </h3>

            <p className="mt-3 text-gray-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}