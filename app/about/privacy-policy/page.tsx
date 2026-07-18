export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Privacy Policy
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
            Your Privacy Matters
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            We value your trust and are committed to protecting your personal
            information while you use FinancePro.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Information We Collect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            We may collect information that you voluntarily provide through
            contact forms, newsletter subscriptions and website interactions.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            How We Use Your Information
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Your information is used to improve our website, respond to
            inquiries, provide requested services and enhance user experience.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Cookies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            FinancePro may use cookies to improve website functionality,
            remember user preferences and analyze website traffic.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Third Party Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            We may use trusted third party services such as analytics and
            advertising providers to improve our services.
          </p>

        </div>
      </section>
    </>
  );
}