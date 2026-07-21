"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const mounted = useMounted();

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <button className="rounded-xl border border-slate-300 px-4 py-2">
        🌙
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="rounded-xl border border-slate-300 bg-white px-4 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}