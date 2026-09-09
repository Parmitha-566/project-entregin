import { useNavigate } from "react-router-dom";

function Recommendations() {
  const navigate = useNavigate();

  const schemes = [
    {
      name: "Entrepreneurship Support Scheme",
      category: "Business Finance",
      match: "94%",
      amount: "Up to ₹1,50,000",
      interest: "Low interest",
      reason: "Suitable for your business requirement and income range.",
    },
    {
      name: "Small Business Assistance Scheme",
      category: "Business Support",
      match: "88%",
      amount: "Up to ₹2,00,000",
      interest: "Subsidized",
      reason: "Supports small entrepreneurs starting or expanding a business.",
    },
    {
      name: "Self Employment Finance Scheme",
      category: "Self Employment",
      match: "81%",
      amount: "Up to ₹1,00,000",
      interest: "Concessional",
      reason: "Designed to support income-generating self-employment activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* Header */}
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
                Scheme Matching
              </p>
            </div>
          </div>

          <span className="text-sm font-medium text-slate-500">
            3 suitable schemes found
          </span>

        </div>
      </header>

      {/* Main */}
      <main className="px-6 py-12">

        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Your recommendations
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Schemes that may be suitable for you.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Based on the information you provided, ENTREGIN
              found these schemes as potential matches.
            </p>

          </div>

          {/* Profile summary */}
          <div className="mt-10 grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Purpose
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                Start a business
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Requirement
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                ₹1,20,000
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Activity
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                Tailoring & garments
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Location
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                Bengaluru
              </p>
            </div>

          </div>

          {/* Scheme cards */}
          <div className="mt-10 space-y-5">

            {schemes.map((scheme, index) => (

              <div
                key={scheme.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        {index === 0 ? "BEST MATCH" : `MATCH ${index + 1}`}
                      </span>

                      <span className="text-sm text-slate-400">
                        {scheme.category}
                      </span>

                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {scheme.name}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                      {scheme.reason}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span className="rounded-xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                        {scheme.amount}
                      </span>

                      <span className="rounded-xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                        {scheme.interest}
                      </span>

                    </div>

                  </div>

                  {/* Match score */}
                  <div className="flex items-center gap-6 md:flex-col md:min-w-[130px]">

                    <div className="text-center">

                      <p className="text-3xl font-bold text-blue-800">
                        {scheme.match}
                      </p>

                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                        Match
                      </p>

                    </div>

                    <button
                      onClick={() => navigate("/scheme-details")}
                      className="rounded-xl bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                    >
                      View details →
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Bottom actions */}
          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="font-bold text-blue-950">
                Want to understand your financial options?
              </h3>

              <p className="mt-1 text-sm text-blue-800/70">
                Use our calculator to estimate your monthly repayment.
              </p>
            </div>

            <button
              onClick={() => navigate("/calculator")}
              className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Calculate EMI →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Recommendations;