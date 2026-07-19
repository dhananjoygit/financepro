export default function HomeSkeleton() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-6 py-8">

      <div className="h-96 rounded-3xl bg-slate-200" />

      <div className="mt-10 grid gap-8 md:grid-cols-3">

        <div className="h-64 rounded-3xl bg-slate-200" />

        <div className="h-64 rounded-3xl bg-slate-200" />

        <div className="h-64 rounded-3xl bg-slate-200" />

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div className="h-80 rounded-3xl bg-slate-200" />

        <div className="h-80 rounded-3xl bg-slate-200" />

      </div>

      <div className="mt-10 h-72 rounded-3xl bg-slate-200" />

    </main>
  );
}