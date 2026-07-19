import BreakingNews from "@/components/home/BreakingNews";
import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import TrendingTopics from "@/components/home/TrendingTopics";
import LatestArticles from "@/components/home/LatestArticles";
import EditorsPick from "@/components/home/EditorsPick";
import Categories from "@/components/home/Categories";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <BreakingNews />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Hero />

        <MarketTicker />

        <FeaturedArticle />

        <TrendingTopics />

        <LatestArticles />

        <EditorsPick />

        <Categories />

        <Newsletter />
      </main>
    </>
  );
}