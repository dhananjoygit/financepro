import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {

  const articleUrls = articles.map((article) => ({
    url: `https://financepro.com/article/${article.slug}`,
    lastModified: new Date(),
  }));


  return [
    {
      url: "https://financepro.com",
      lastModified: new Date(),
    },

    {
      url: "https://financepro.com/about",
      lastModified: new Date(),
    },

    {
      url: "https://financepro.com/contact",
      lastModified: new Date(),
    },

    {
      url: "https://financepro.com/privacy",
      lastModified: new Date(),
    },

    {
      url: "https://financepro.com/terms",
      lastModified: new Date(),
    },

    ...articleUrls,
  ];
}