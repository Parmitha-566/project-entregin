import { useNavigate } from "react-router-dom";

function SchemeDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 font-bold text-white">
              E
            </div>

            <div>
              <h1 className="font-bold text-blue-950">
                ENTREGIN
              </h1>
              <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                Scheme Details
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/recommendations")}
            className="text-sm font-medium text-slate-500 hover:text-blue-800"
          >
            ← Back to recommendations
          </button>

        </div>
      </header>

      <main className="px-6 py-12">
        <div className="mx-auto max-w-5xl">

          {/* Hero */}
          <div className="rounded-[2rem] bg-blue-950 p-8 text-white shadow-xl md:p-10">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  94% Match
                </span>

                <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                  Entrepreneurship Support Scheme
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                  A financial assistance option designed to support
                  eligible individuals in starting or expanding
                  income-generating activities.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                <p className="text-sm text-blue-200">
                  Potential assistance
                </p>

                <p className="mt-2 text-3xl font-bold">
                  ₹1,50,000
                </p>

                <p className="mt-1 text-xs text-blue-200">
                  Maximum shown for demo
                </p>
              </div>

            </div>
          </div>

          {/* Main information */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold">
                Why this matches you
              </h3>

              <div className="mt-6 space-y-4">

                {[
                  "Your requirement is related to starting a business.",
                  "Your requested funding falls within the supported range.",
                  "Your activity is suitable for income generation.",
                  "Your profile matches the basic demo criteria.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      ✓
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold">
                Key information
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Assistance type
                  </p>
                  <p className="mt-1 font-semibold">
                    Financial assistance
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Interest
                  </p>
                  <p className="mt-1 font-semibold">
                    Concessional / low interest
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Target activity
                  </p>
                  <p className="mt-1 font-semibold">
                    Small business & self-employment
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Application
                  </p>
                  <p className="mt-1 font-semibold">
                    Through authorized partners
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Eligibility */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold">
              Eligibility overview
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {[
                "Applicant should satisfy the scheme's income criteria.",
                "Applicant should meet the applicable category requirements.",
                "Proposed activity should be eligible under the scheme.",
                "Required documents must be available during application.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-5"
                >
                  <span className="text-sm font-bold text-blue-700">
                    0{index + 1}
                  </span>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Important:</strong> This recommendation is for
              guidance. Final eligibility is determined according to
              the official scheme rules and the authorized implementing
              agency.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => navigate("/calculator")}
              className="flex-1 rounded-xl bg-blue-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Calculate EMI →
            </button>

            <button
              onClick={() => navigate("/documents")}
              className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Check documents
            </button>

          </div>

        </div>
      </main>

    </div>
  );
}

export default SchemeDetails;