import Link from "next/link";

const categories = [
  {
    name: "Markets",
    description: "Latest stock market news and analysis.",
    href: "/category/markets",
    icon: "📈",
  },
  {
    name: "Investing",
    description: "Investment strategies for long-term growth.",
    href: "/category/investing",
    icon: "💰",
  },
  {
    name: "Economy",
    description: "Economic trends, inflation and policy updates.",
    href: "/category/economy",
    icon: "🏦",
  },
  {
    name: "Retirement",
    description: "Retirement planning and wealth management.",
    href: "/category/retirement",
    icon: "👴",
  },
  {
    name: "Credit Cards",
    description: "Credit card reviews and financial tips.",
    href: "/category/credit-cards",
    icon: "💳",
  },
  {
    name: "Personal Finance",
    description: "Budgeting, saving and smarter money habits.",
    href: "/category/personal-finance",
    icon: "💵",
  },
];

export default function Categories() {
  return (
    <section className="my-20">

      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Explore our finance topics and discover expert insights.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="text-5xl">
              {category.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600">
              {category.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {category.description}
            </p>

            <div className="mt-8 font-semibold text-blue-600">
              Explore →
            </div>
          </Link>
        ))}

      </div>

    </section>
  );
}