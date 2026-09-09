import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    purpose: "",
    businessType: "",
    amount: "",
    income: "",
    location: "",
  });

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      localStorage.setItem(
        "entreginProfile",
        JSON.stringify(formData)
      );

      navigate("/recommendations");
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const questions = [
    {
      title: "What do you need financial assistance for?",
      options: [
        "Start a business",
        "Expand an existing business",
        "Education",
        "Other financial assistance",
      ],
      field: "purpose",
    },
    {
      title: "What type of activity are you interested in?",
      options: [
        "Tailoring & garments",
        "Food & catering",
        "Retail business",
        "Service business",
        "Other",
      ],
      field: "businessType",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

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
            Step {step} of 5
          </span>

        </div>
      </header>

      <main className="px-6 py-12">

        <div className="mx-auto max-w-3xl">

          <div className="mb-10">

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-700 transition-all duration-500"
                style={{ width: `${step * 20}%` }}
              />
            </div>

          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">

            {step <= 2 && (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Tell us about your requirement
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  {questions[step - 1].title}
                </h2>

                <div className="mt-8 grid gap-4">
                  {questions[step - 1].options.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        updateField(
                          questions[step - 1].field,
                          option
                        )
                      }
                      className={`rounded-2xl border p-5 text-left transition ${
                        formData[questions[step - 1].field] === option
                          ? "border-blue-600 bg-blue-50 text-blue-900"
                          : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                      }`}
                    >
                      <span className="font-semibold">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Funding requirement
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  How much funding do you need?
                </h2>

                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) =>
                    updateField("amount", e.target.value)
                  }
                  placeholder="Example: 120000"
                  className="mt-8 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-3 text-sm text-slate-400">
                  Enter the approximate amount in Indian Rupees.
                </p>
              </>
            )}

            {step === 4 && (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Household information
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  What is your approximate annual family income?
                </h2>

                <select
                  value={formData.income}
                  onChange={(e) =>
                    updateField("income", e.target.value)
                  }
                  className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-blue-600"
                >
                  <option value="">Select income range</option>
                  <option value="Below ₹1 lakh">Below ₹1 lakh</option>
                  <option value="₹1–3 lakh">₹1–3 lakh</option>
                  <option value="₹3–5 lakh">₹3–5 lakh</option>
                  <option value="₹5–10 lakh">₹5–10 lakh</option>
                  <option value="Above ₹10 lakh">Above ₹10 lakh</option>
                </select>
              </>
            )}

            {step === 5 && (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Location
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Where are you applying from?
                </h2>

                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    updateField("location", e.target.value)
                  }
                  placeholder="Enter your city or district"
                  className="mt-8 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </>
            )}

            <div className="mt-10 flex justify-between">

              <button
                onClick={previousStep}
                disabled={step === 1}
                className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-600 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Back
              </button>

              <button
                onClick={nextStep}
                className="rounded-xl bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                {step === 5 ? "Find my schemes →" : "Continue →"}
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Questionnaire;