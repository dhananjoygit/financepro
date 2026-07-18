export default function ShareButtons() {
  return (
    <section className="mt-16 border-t pt-8">

      <h3 className="mb-4 text-xl font-bold">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-4">

        <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
          Facebook
        </button>

        <button className="rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white">
          X
        </button>

        <button className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white">
          WhatsApp
        </button>

        <button className="rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white">
          Copy Link
        </button>

      </div>

    </section>
  );
}