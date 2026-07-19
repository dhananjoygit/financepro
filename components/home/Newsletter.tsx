"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setSuccess(false);
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setLoading(false);

    setSuccess(true);

    setMessage(
      "🎉 Thanks for subscribing! You'll receive our latest finance updates soon."
    );

    setEmail("");
  }

  return (
    <section className="mt-20 rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-2xl">

      <div className="mx-auto max-w-3xl text-center">

        <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
          Weekly Newsletter
        </span>

        <h2 className="mt-6 text-4xl font-extrabold">
          Never Miss an Important Finance Update
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Get the latest investing insights,
          market analysis, economic news,
          and personal finance tips delivered
          directly to your inbox every week.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Subscribing..."
              : "Subscribe"}
          </button>

        </form>

        {message && (
          <div
            className={`mt-6 rounded-xl px-5 py-4 text-sm font-medium ${
              success
                ? "bg-green-600/20 text-green-300 border border-green-500"
                : "bg-red-600/20 text-red-300 border border-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <p className="mt-6 text-sm text-slate-400">
          No spam. Unsubscribe anytime.
        </p>

      </div>

    </section>
  );
}