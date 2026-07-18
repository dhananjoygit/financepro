export interface Article {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "americas-34-trillion-debt-bomb",
    category: "Economy",
    title: "America's $34 Trillion Debt Bomb",
    description:
      "Discover why America's national debt is growing rapidly and what it means for the economy, inflation and future generations.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/debt.jpg",
  },

  {
    id: 2,
    slug: "the-7-2-million-deal-that-changed-america-forever",
    category: "Markets",
    title: "The $7.2 Million Deal That Changed America Forever",
    description:
      "The Alaska Purchase reshaped America's economy, trade opportunities and long term financial growth.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/alaska.jpg",
  },

  {
    id: 3,
    slug: "why-the-bering-strait-bridge-was-never-built",
    category: "Retirement",
    title: "Why the Bering Strait Bridge Was Never Built",
    description:
      "Explore the economic, political and engineering challenges behind one of history's most ambitious infrastructure ideas.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/bering.jpg",
  },

  {
    id: 4,
    slug: "living-in-two-different-days-at-the-bering-strait",
    category: "Credit Cards",
    title: "Living in Two Different Days at the Bering Strait",
    description:
      "Discover how geography, international borders and global trade influence one of the world's most unique locations.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/date-line.jpg",
  },

  {
    id: 5,
    slug: "how-the-federal-reserve-controls-inflation",
    category: "Economy",
    title: "How the Federal Reserve Controls Inflation",
    description:
      "A simple explanation of interest rates, inflation and the Federal Reserve's role.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/fed.jpg",
  },

  {
    id: 6,
    slug: "best-investment-strategies-for-beginners",
    category: "Investing",
    title: "Best Investment Strategies for Beginners",
    description:
      "A practical guide to building long term wealth through smart investing.",
    author: "FinancePro",
    date: "July 2026",
    image: "/images/investing.jpg",
  },
];