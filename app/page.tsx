import HomeLayout from "@/components/home/HomeLayout";

import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import LatestArticles from "@/components/home/LatestArticles";
import Categories from "@/components/home/Categories";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <MarketTicker />
      <FeaturedArticle />
      <LatestArticles />
      <Categories />
      <Newsletter />
    </HomeLayout>
  );
}