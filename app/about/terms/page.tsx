export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Terms & Conditions
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
            Terms of Use
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Please read these terms carefully before using FinancePro.
            By accessing this website, you agree to comply with these terms.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Acceptance of Terms
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            By using FinancePro, you agree to follow these terms and all
            applicable laws and regulations.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Content Disclaimer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The information published on FinancePro is provided for
            educational and informational purposes only. It should not be
            considered financial, investment or legal advice.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Intellectual Property
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            All original content, graphics and branding on FinancePro are
            protected by applicable copyright and intellectual property laws.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Changes to These Terms
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            We may update these terms from time to time. Continued use of
            the website indicates acceptance of the revised terms.
          </p>

        </div>
      </section>
    </>
  );
}