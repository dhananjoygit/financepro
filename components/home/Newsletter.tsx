export default function Newsletter() {
  return (
    <section className="mx-auto my-20 max-w-7xl rounded-2xl bg-blue-600 px-8 py-16 text-center text-white">
      <h2 className="text-4xl font-bold">
        Stay Updated with FinancePro
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
        Get the latest finance news, investing tips, market analysis and
        economic updates delivered directly to your inbox.
      </p>

      <div className="mx-auto mt-8 flex max-w-xl gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-lg px-5 py-4 text-black outline-none"
        />

        <button className="rounded-lg bg-black px-8 font-semibold text-white hover:bg-gray-900">
          Subscribe
        </button>
      </div>
    </section>
  );
}