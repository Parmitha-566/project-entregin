import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const [amount, setAmount] = useState(120000);
  const [interest, setInterest] = useState(7);
  const [tenure, setTenure] = useState(36);

  const monthlyRate = interest / 12 / 100;

  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const content = {
    English: {
      section: "Financial simulator",
      title: "Plan your repayment.",
      subtitle:
        "Adjust the loan amount, interest rate and tenure to understand your estimated EMI.",
      amount: "Loan amount",
      interest: "Interest rate",
      tenure: "Loan tenure",
      months: "months",
      monthlyEmi: "Estimated monthly EMI",
      principal: "Principal amount",
      totalInterest: "Total interest",
      totalRepayment: "Total repayment",
      next: "Check document readiness",
      note:
        "This calculator provides an estimate for demonstration. Actual loan terms, interest rates and repayment schedules may vary.",
      back: "← Back to scheme",
    },

    Hindi: {
      section: "वित्तीय सिम्युलेटर",
      title: "अपनी भुगतान योजना बनाएं।",
      subtitle:
        "अनुमानित EMI समझने के लिए ऋण राशि, ब्याज दर और अवधि को बदलें।",
      amount: "ऋण राशि",
      interest: "ब्याज दर",
      tenure: "ऋण अवधि",
      months: "महीने",
      monthlyEmi: "अनुमानित मासिक EMI",
      principal: "मूल राशि",
      totalInterest: "कुल ब्याज",
      totalRepayment: "कुल भुगतान",
      next: "दस्तावेज़ की तैयारी जांचें",
      note:
        "यह कैलकुलेटर केवल प्रदर्शन के लिए अनुमान देता है। वास्तविक ऋण शर्तें, ब्याज दरें और भुगतान अलग हो सकते हैं।",
      back: "← योजना पर वापस",
    },

    Kannada: {
      section: "ಹಣಕಾಸು ಸಿಮ್ಯುಲೇಟರ್",
      title: "ನಿಮ್ಮ ಮರುಪಾವತಿಯನ್ನು ಯೋಜಿಸಿ.",
      subtitle:
        "ಅಂದಾಜು EMI ತಿಳಿಯಲು ಸಾಲದ ಮೊತ್ತ, ಬಡ್ಡಿದರ ಮತ್ತು ಅವಧಿಯನ್ನು ಹೊಂದಿಸಿ.",
      amount: "ಸಾಲದ ಮೊತ್ತ",
      interest: "ಬಡ್ಡಿದರ",
      tenure: "ಸಾಲದ ಅವಧಿ",
      months: "ತಿಂಗಳುಗಳು",
      monthlyEmi: "ಅಂದಾಜು ಮಾಸಿಕ EMI",
      principal: "ಮೂಲ ಮೊತ್ತ",
      totalInterest: "ಒಟ್ಟು ಬಡ್ಡಿ",
      totalRepayment: "ಒಟ್ಟು ಮರುಪಾವತಿ",
      next: "ದಾಖಲೆಗಳ ಸಿದ್ಧತೆ ಪರಿಶೀಲಿಸಿ",
      note:
        "ಈ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಅಂದಾಜು ನೀಡುತ್ತದೆ. ನಿಜವಾದ ಸಾಲದ ನಿಯಮಗಳು, ಬಡ್ಡಿದರಗಳು ಮತ್ತು ಮರುಪಾವತಿ ಬದಲಾಗಬಹುದು.",
      back: "← ಯೋಜನೆಗೆ ಹಿಂತಿರುಗಿ",
    },
  };

  const text = content[language] || content.English;

  const formatCurrency = (value) =>
    `₹${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#0b2a5b] text-lg font-bold text-white shadow-md">
              E
              <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-400" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-[#0b2a5b]">
                ENTREGIN
              </h1>

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {text.section}
              </p>
            </div>

          </div>

        </div>
      </header>


      {/* MAIN */}
      <main className="px-6 py-12 md:py-16">

        <div className="mx-auto max-w-5xl">

          {/* BACK */}
          <button
            onClick={() => navigate("/scheme-details")}
            className="mb-8 text-sm font-semibold text-slate-500 hover:text-blue-700"
          >
            {text.back}
          </button>


          {/* HEADING */}
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {text.section}
            </div>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              {text.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              {text.subtitle}
            </p>

          </div>


          {/* CALCULATOR */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">

            {/* INPUT CARD */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">

              {/* AMOUNT */}
              <div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700">
                    {text.amount}
                  </label>

                  <span className="font-extrabold text-blue-800">
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


              {/* INTEREST */}
              <div className="mt-9">

                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700">
                    {text.interest}
                  </label>

                  <span className="font-extrabold text-blue-800">
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


              {/* TENURE */}
              <div className="mt-9">

                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700">
                    {text.tenure}
                  </label>

                  <span className="font-extrabold text-blue-800">
                    {tenure} {text.months}
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
                  <span>6 {text.months}</span>
                  <span>84 {text.months}</span>
                </div>

              </div>

            </div>


            {/* RESULT CARD */}
            <div className="rounded-[2rem] bg-[#061a3b] p-7 text-white shadow-xl md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                {text.monthlyEmi}
              </p>

              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                {formatCurrency(emi)}
              </p>


              {/* SUMMARY */}
              <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">

                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-blue-100/60">
                    {text.principal}
                  </span>

                  <span className="font-bold">
                    {formatCurrency(amount)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-blue-100/60">
                    {text.totalInterest}
                  </span>

                  <span className="font-bold">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-blue-100/60">
                    {text.totalRepayment}
                  </span>

                  <span className="font-bold">
                    {formatCurrency(totalPayment)}
                  </span>
                </div>

              </div>


              {/* CTA */}
              <button
                onClick={() => navigate("/documents")}
                className="mt-7 w-full rounded-xl bg-white px-6 py-4 font-bold text-[#061a3b] shadow-lg hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.next} →
              </button>

            </div>

          </div>


          {/* DISCLAIMER */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              <strong>Note:</strong> {text.note}
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Calculator;