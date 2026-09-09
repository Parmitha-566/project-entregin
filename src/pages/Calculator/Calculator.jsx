import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(120000);
  const [interest, setInterest] = useState(7);
  const [tenure, setTenure] = useState(36);

  const monthlyRate = interest / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const formatCurrency = (value) =>
    `₹${Math.round(value).toLocaleString("en-IN")}`;

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
                Financial Simulator
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/scheme-details")}
            className="text-sm font-medium text-slate-500 hover:text-blue-800"
          >
            ← Back
          </button>

        </div>
      </header>

      {/* Main */}
      <main className="px-6 py-12">

        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Financial simulation
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Plan your repayment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Adjust the loan amount, interest rate and repayment
              period to understand your estimated monthly EMI.
            </p>

          </div>

          {/* Calculator */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Inputs */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">

              <h3 className="text-xl font-bold">
                Loan details
              </h3>

              {/* Amount */}
              <div className="mt-8">

                <div className="flex items-center justify-between">
                  <label className="font-semibold">
                    Loan amount
                  </label>

                  <span className="font-bold text-blue-800">
                    {formatCurrency(amount)}
                  </span>
                </div>

                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-5 w-full accent-blue-800"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>₹10,000</span>
                  <span>₹5,00,000</span>
                </div>

              </div>

              {/* Interest */}
              <div className="mt-8">

                <div className="flex items-center justify-between">
                  <label className="font-semibold">
                    Interest rate
                  </label>

                  <span className="font-bold text-blue-800">
                    {interest}%
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="mt-5 w-full accent-blue-800"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>1%</span>
                  <span>15%</span>
                </div>

              </div>

              {/* Tenure */}
              <div className="mt-8">

                <div className="flex items-center justify-between">
                  <label className="font-semibold">
                    Repayment period
                  </label>

                  <span className="font-bold text-blue-800">
                    {tenure} months
                  </span>
                </div>

                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="mt-5 w-full accent-blue-800"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>6 months</span>
                  <span>84 months</span>
                </div>

              </div>

            </div>

            {/* Result */}
            <div className="rounded-[2rem] bg-blue-950 p-8 text-white shadow-xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                Estimated repayment
              </p>

              <div className="mt-8">

                <p className="text-sm text-blue-200">
                  Monthly EMI
                </p>

                <p className="mt-2 text-5xl font-bold">
                  {formatCurrency(emi)}
                </p>

                <p className="mt-3 text-sm text-blue-200">
                  Approximate monthly payment
                </p>

              </div>

              <div className="mt-10 space-y-4">

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-blue-200">
                    Principal amount
                  </span>

                  <span className="font-semibold">
                    {formatCurrency(amount)}
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-blue-200">
                    Total interest
                  </span>

                  <span className="font-semibold">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-200">
                    Total repayment
                  </span>

                  <span className="font-semibold">
                    {formatCurrency(totalPayment)}
                  </span>
                </div>

              </div>

              <div className="mt-10 rounded-2xl bg-white/10 p-5">
                <p className="text-sm leading-6 text-blue-100">
                  This is an estimate for planning purposes.
                  Actual repayment may vary based on the final
                  scheme terms and lending partner.
                </p>
              </div>

            </div>

          </div>

          {/* Next step */}
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-7 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Next step
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Check what documents you may need.
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Prepare the required documents before applying.
              </p>
            </div>

            <button
              onClick={() => navigate("/documents")}
              className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Check documents →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Calculator;