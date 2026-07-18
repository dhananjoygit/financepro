import Card from "@/components/ui/Card";

export default function FeaturedArticle() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Card>
        <div className="flex h-80 items-center justify-center bg-slate-200">
          <span className="text-2xl font-bold text-gray-500">
            Featured Image
          </span>
        </div>

        <div className="p-8">
          <span className="rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Economy
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The U.S. $34 Trillion Debt Crisis Explained
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Learn how the growing U.S. national debt affects inflation,
            interest rates, taxes, and the future of the American economy.
          </p>

          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Read Article
          </button>
        </div>
      </Card>
    </section>
  );
}