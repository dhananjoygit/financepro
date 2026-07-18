export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Have a question, business inquiry or editorial suggestion?
            Send us a message and our team will get back to you.
          </p>

        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Send a Message
          </h2>

          <form className="mt-10 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>
    </>
  );
}