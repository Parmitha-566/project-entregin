import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  const startJourney = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 font-bold text-white">
              E
            </div>

            <div>
              <h1 className="text-xl font-bold text-blue-950">
                ENTREGIN
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Empowering Possibilities
              </p>
            </div>
          </div>

        </div>
      </header>

      <main className="px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Let's get started
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Let's understand what you need.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-500">
                ENTREGIN will ask a few simple questions to understand
                your requirements and find government schemes that may
                be suitable for you.
              </p>

              <button
                onClick={startJourney}
                className="mt-8 rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                Start questionnaire →
              </button>

            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">

              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Your journey
              </p>

              <div className="mt-7 space-y-6">

                {[
                  ["01", "Tell us about yourself"],
                  ["02", "Describe your requirement"],
                  ["03", "Check suitable schemes"],
                  ["04", "Plan your finances"],
                  ["05", "Find the right partner"],
                ].map(([number, title]) => (
                  <div key={number} className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-800">
                      {number}
                    </div>

                    <p className="font-medium text-slate-700">
                      {title}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-500">
                  No complicated searches. We'll guide you through
                  each step.
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Onboarding;