"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { articles } from "@/data/articles";

export default function FeaturedArticle() {
  const featuredArticles = articles.slice(0, 5);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === featuredArticles.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  function nextSlide() {
    setCurrent((prev) =>
      prev === featuredArticles.length - 1 ? 0 : prev + 1
    );
  }

  function previousSlide() {
    setCurrent((prev) =>
      prev === 0 ? featuredArticles.length - 1 : prev - 1
    );
  }

  const article = featuredArticles[current];

  return (
    <section className="mb-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      <div className="grid lg:grid-cols-2">

        <div className="relative overflow-hidden">

          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={800}
            priority
            className="h-full min-h-[420px] w-full object-cover transition duration-500 hover:scale-105"
          />

          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition hover:bg-white"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition hover:bg-white"
          >
            →
          </button>

        </div>

        <div className="flex flex-col justify-center p-10">

          <span className="inline-flex w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Story
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">
            {article.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-500">
            <span>👤 {article.author}</span>
            <span>📅 {article.date}</span>
          </div>

          <Link
            href={`/article/${article.slug}`}
            className="mt-10 inline-flex w-fit rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Read Full Story →
          </Link>

          <div className="mt-10 flex gap-3">

            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}