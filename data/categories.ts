export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Markets",
    slug: "markets",
    description: "Stock market news, trends and analysis.",
    icon: "📈",
  },
  {
    id: 2,
    name: "Investing",
    slug: "investing",
    description: "Investment strategies and wealth building.",
    icon: "💰",
  },
  {
    id: 3,
    name: "Economy",
    slug: "economy",
    description: "Economic news and inflation updates.",
    icon: "🏦",
  },
  {
    id: 4,
    name: "Retirement",
    slug: "retirement",
    description: "Retirement planning and savings.",
    icon: "👴",
  },
  {
    id: 5,
    name: "Credit Cards",
    slug: "credit-cards",
    description: "Credit card guides and reviews.",
    icon: "💳",
  },
  {
    id: 6,
    name: "Taxes",
    slug: "taxes",
    description: "Tax saving tips and IRS updates.",
    icon: "💵",
  },
  {
    id: 7,
    name: "Real Estate",
    slug: "real-estate",
    description: "Housing market and real estate investing.",
    icon: "🏠",
  },
  {
    id: 8,
    name: "Banking",
    slug: "banking",
    description: "Bank accounts, loans and financial services.",
    icon: "🏛️",
  },
];