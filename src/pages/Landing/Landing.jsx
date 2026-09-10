import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#0b2a5b] text-lg font-bold text-white shadow-lg shadow-blue-950/15">
              E
              <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-400" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-[#0b2a5b]">
                ENTREGIN
              </h1>

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Empowering Possibilities
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-[#0b2a5b]"
            >
              How it works
            </a>

            <a
              href="#benefits"
              className="text-sm font-medium text-slate-600 hover:text-[#0b2a5b]"
            >
              Benefits
            </a>

            <button
              onClick={() => navigate("/language")}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              Language
            </button>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061a3b]">

        {/* BACKGROUND DETAILS */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="absolute right-[20%] top-[15%] h-2 w-2 rounded-full bg-blue-300/60" />
          <div className="absolute right-[10%] top-[45%] h-1.5 w-1.5 rounded-full bg-cyan-300/50" />
          <div className="absolute left-[45%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-blue-200/40" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">

          {/* HERO LEFT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-300/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Intelligent Government Scheme Assistance
            </div>

            <h2 className="max-w-3xl text-5xl font-extrabold leading-[1.03] tracking-[-0.035em] text-white md:text-6xl lg:text-[4.4rem]">

              The right scheme can

              <span className="mt-2 block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                change your next step.
              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/70">
              ENTREGIN helps entrepreneurs discover suitable government
              assistance, understand eligibility, plan finances and connect
              with authorized channel partners.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => navigate("/language")}
                className="group rounded-xl bg-white px-7 py-4 font-bold text-[#061a3b] shadow-2xl shadow-black/20 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-900 hover:shadow-blue-950/30"
              >
                Find the right scheme

                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a
                href="#how-it-works"
                className="rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-center font-semibold text-white backdrop-blur hover:-translate-y-1 hover:bg-white/10"
              >
                Explore how it works
              </a>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/65">
              <span>✓ Transparent eligibility</span>
              <span>✓ Explainable recommendations</span>
              <span>✓ Authorized partners</span>
            </div>

          </div>


          {/* INTELLIGENCE CARD */}
          <div className="relative">

            {/* MATCH BADGE */}
            <div className="absolute -right-4 top-8 z-20 rounded-2xl border border-emerald-100 bg-white px-5 py-3 shadow-xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Match confidence
              </p>

              <p className="mt-1 text-xl font-extrabold text-emerald-600">
                94%
              </p>

            </div>


            {/* MAIN CARD */}
            <div className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-7">

              {/* CARD HEADER */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    ENTREGIN Intelligence
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                    Finding your best match
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                  AI
                </div>

              </div>


              {/* REQUIREMENT */}
              <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-5">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Your requirement
                </p>

                <div className="mt-3 flex items-center justify-between gap-4">

                  <div>
                    <p className="font-bold text-slate-900">
                      Start a tailoring business
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Project requirement
                    </p>
                  </div>

                  <p className="text-xl font-extrabold text-slate-900">
                    ₹1.2L
                  </p>

                </div>

              </div>


              {/* ANALYSIS */}
              <div className="mt-6">

                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    Analysing requirements
                  </span>

                  <span className="font-bold text-blue-700">
                    94%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
                </div>

              </div>


              {/* RECOMMENDATION */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                      Recommended
                    </p>

                    <h4 className="mt-2 text-lg font-extrabold text-slate-900">
                      Tailoring & Enterprise Support
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Strong match based on your requirements, income and
                      business activity.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">
                    Best Match
                  </span>

                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                    Eligible
                  </span>

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
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

          {[
            ["01", "Understand your needs"],
            ["02", "Discover suitable schemes"],
            ["03", "Connect with the right partner"],
          ].map(([number, text]) => (

            <div
              key={number}
              className="px-6 py-4 text-center sm:py-1 sm:text-left"
            >
              <p className="text-2xl font-extrabold text-[#0b2a5b]">
                {number}
              </p>

              <p className="mt-1 text-sm font-medium text-slate-500">
                {text}
              </p>
            </div>

          ))}

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

            <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              From a simple need to a clear path forward.
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              No complicated forms. No searching through dozens of schemes.
              Just a guided journey built around your needs.
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
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-700">
                    {step.number}
                  </span>

                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500">
                    →
                  </span>
                </div>

                <h4 className="mt-10 text-xl font-extrabold text-slate-900">
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

              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
                Government assistance shouldn't be difficult to understand.
              </h3>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
                ENTREGIN simplifies the entire journey — from discovering
                schemes to understanding your options and reaching the right
                authorized partner.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["01", "Explainable", "Know why a scheme was recommended to you."],
                ["02", "Accessible", "Designed for simple, guided interactions."],
                ["03", "Financial clarity", "Understand funding, contribution and EMI before proceeding."],
                ["04", "Better routing", "Find a suitable authorized channel partner."],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                >

                  <p className="text-3xl font-extrabold text-blue-800">
                    {number}
                  </p>

                  <h4 className="mt-5 font-extrabold text-slate-900">
                    {title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#061a3b] px-6 py-24 text-white">

        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Your journey starts here
          </p>

          <h3 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Right Scheme.
            <br />
            Right Partner.
            <br />
            Right Path.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
            Tell ENTREGIN what you need. We'll help you understand where you
            fit and what your next step could be.
          </p>

          <button
            onClick={() => navigate("/language")}
            className="mt-9 rounded-xl bg-white px-8 py-4 font-bold text-[#08204a] shadow-2xl hover:-translate-y-1"
          >
            Start your journey →
          </button>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#04132d] px-6 py-8 text-blue-100">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">

          <div>
            <p className="font-extrabold text-white">
              ENTREGIN
            </p>

            <p className="mt-1 text-blue-200/50">
              Right Scheme. Right Partner. Right Path.
            </p>
          </div>

          <p className="text-blue-200/40">
            © 2026 ENTREGIN
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Landing;