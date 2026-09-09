import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-lg font-bold text-white">
              E
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-blue-950">
                ENTREGIN
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Empowering Possibilities
              </p>
            </div>

          </div>

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              How it works
            </a>

            <a
              href="#benefits"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              Benefits
            </a>

            <button
              onClick={() => navigate("/language")}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-50"
            >
              Language
            </button>

          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a3d]">

        {/* Decorative glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">

          {/* LEFT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Intelligent Government Scheme Assistance
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">

              The right scheme can

              <span className="block text-blue-300">
                change your next step.
              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/75">
              ENTREGIN uses intelligent scheme matching to help
              entrepreneurs discover suitable government assistance,
              understand eligibility, plan finances and connect with
              authorized channel partners.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              {/* FIND SCHEME BUTTON */}
              <button
                onClick={() => navigate("/language")}
                className="group rounded-xl bg-white px-7 py-4 font-semibold text-blue-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Find the right scheme

                <span className="ml-2 transition group-hover:ml-3">
                  →
                </span>

              </button>

              {/* EXPLORE BUTTON */}
              <a
                href="#how-it-works"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore how it works
              </a>

            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/70">

              <span>
                ✓ Transparent eligibility
              </span>

              <span>
                ✓ Explainable recommendations
              </span>

              <span>
                ✓ Authorized partners
              </span>

            </div>

          </div>


          {/* RIGHT INTELLIGENCE CARD */}
          <div className="relative">

            {/* Floating label */}
            <div className="absolute -right-3 -top-5 z-10 rounded-xl border border-white/10 bg-white px-4 py-3 shadow-2xl">

              <p className="text-xs font-medium text-slate-500">
                MATCH CONFIDENCE
              </p>

              <p className="text-lg font-bold text-emerald-600">
                94%
              </p>

            </div>


            <div className="rounded-[2rem] border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    ENTREGIN Intelligence
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Finding your best match
                  </h3>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  AI
                </div>

              </div>


              {/* User need */}
              <div className="mt-7 rounded-2xl bg-slate-50 p-4">

                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Your requirement
                </p>

                <div className="mt-3 flex items-center justify-between">

                  <div>

                    <p className="font-semibold text-slate-900">
                      Start a tailoring business
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Project requirement
                    </p>

                  </div>

                  <p className="text-lg font-bold text-slate-900">
                    ₹1.2L
                  </p>

                </div>

              </div>


              {/* Matching progress */}
              <div className="mt-5">

                <div className="flex justify-between text-sm">

                  <span className="font-medium text-slate-700">
                    Analysing requirements
                  </span>

                  <span className="font-semibold text-blue-700">
                    94%
                  </span>

                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">

                  <div className="h-full w-[94%] rounded-full bg-blue-700" />

                </div>

              </div>


              {/* Recommendation */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      Recommended
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-slate-900">
                      Tailoring & Enterprise Support
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Strong match based on your requirements,
                      income and business activity.
                    </p>

                  </div>

                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    Best Match
                  </div>

                </div>

                <div className="mt-4 flex gap-2">

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                    Eligible
                  </span>

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                    Financial Support
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          <div className="px-6 text-center sm:text-left">

            <p className="text-2xl font-bold text-slate-900">
              01
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Understand your needs
            </p>

          </div>


          <div className="px-6 pt-6 text-center sm:pt-0 sm:text-left">

            <p className="text-2xl font-bold text-slate-900">
              02
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Discover suitable schemes
            </p>

          </div>


          <div className="px-6 pt-6 text-center sm:pt-0 sm:text-left">

            <p className="text-2xl font-bold text-slate-900">
              03
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Connect with the right partner
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-white px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              How ENTREGIN works
            </p>

            <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              From a simple need to a clear path forward.
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              No complicated forms. No searching through dozens of
              schemes. Just a guided journey built around your needs.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Tell us your need",
                text: "Answer a few simple questions about your business, education or financial requirement.",
              },
              {
                number: "02",
                title: "Check eligibility",
                text: "Understand which schemes fit your profile using transparent eligibility rules.",
              },
              {
                number: "03",
                title: "Compare your options",
                text: "See recommendations with clear reasons, financial support and estimated EMI.",
              },
              {
                number: "04",
                title: "Find your partner",
                text: "Connect with an appropriate authorized channel partner near you.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >

                <span className="text-sm font-bold text-blue-700">
                  {step.number}
                </span>

                <h4 className="mt-10 text-xl font-bold text-slate-900">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-20" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section
        id="benefits"
        className="bg-slate-50 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Built around you
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                Government assistance shouldn't be difficult to understand.
              </h3>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
                ENTREGIN simplifies the entire journey — from discovering
                schemes to understanding your options and reaching the
                right authorized partner.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl bg-white p-7 shadow-sm">

                <p className="text-3xl font-bold text-blue-800">
                  01
                </p>

                <h4 className="mt-5 font-bold text-slate-900">
                  Explainable
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Know why a scheme was recommended to you.
                </p>

              </div>


              <div className="rounded-3xl bg-white p-7 shadow-sm">

                <p className="text-3xl font-bold text-blue-800">
                  02
                </p>

                <h4 className="mt-5 font-bold text-slate-900">
                  Accessible
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Designed for simple, guided interactions.
                </p>

              </div>


              <div className="rounded-3xl bg-white p-7 shadow-sm">

                <p className="text-3xl font-bold text-blue-800">
                  03
                </p>

                <h4 className="mt-5 font-bold text-slate-900">
                  Financial clarity
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Understand funding, contribution and EMI before proceeding.
                </p>

              </div>


              <div className="rounded-3xl bg-white p-7 shadow-sm">

                <p className="text-3xl font-bold text-blue-800">
                  04
                </p>

                <h4 className="mt-5 font-bold text-slate-900">
                  Better routing
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Find a suitable authorized channel partner.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#071a3d] px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Your journey starts here
          </p>

          <h3 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Right Scheme.
            <br />
            Right Partner.
            <br />
            Right Path.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
            Tell ENTREGIN what you need. We'll help you understand
            where you fit and what your next step could be.
          </p>

          {/* START JOURNEY BUTTON */}
          <button
            onClick={() => navigate("/language")}
            className="mt-9 rounded-xl bg-white px-8 py-4 font-bold text-blue-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Start your journey →
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#04132d] px-6 py-8 text-blue-100">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">

          <div>

            <p className="font-bold text-white">
              ENTREGIN
            </p>

            <p className="mt-1 text-blue-200/60">
              Right Scheme. Right Partner. Right Path.
            </p>

          </div>

          <p className="text-blue-200/50">
            © 2026 ENTREGIN
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Landing;