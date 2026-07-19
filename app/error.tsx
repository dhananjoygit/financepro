"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-20">

      <div className="mx-auto max-w-2xl text-center">

        <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
          Something Went Wrong
        </span>

        <h1 className="mt-8 text-5xl font-extrabold text-slate-900">
          Oops!
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          An unexpected error occurred while loading this page.
          Please try again. If the problem continues,
          come back a little later.
        </p>

        <button
          onClick={() => reset()}
          className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}