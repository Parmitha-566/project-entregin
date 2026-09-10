import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    purpose: "",
    businessType: "",
    amount: "",
    income: "",
    location: "",
  });

  const content = {
    English: {
      brandSub: "Scheme Matching",
      step: "Step",
      of: "of",
      section: "Tell us about your requirement",
      questions: [
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
      ],
      funding: "Funding requirement",
      fundingTitle: "How much funding do you need?",
      amountPlaceholder: "Example: 120000",
      amountHint: "Enter the approximate amount in Indian Rupees.",
      incomeSection: "Household information",
      incomeTitle: "What is your approximate annual family income?",
      incomePlaceholder: "Select income range",
      incomes: [
        "Below ₹1 lakh",
        "₹1–3 lakh",
        "₹3–5 lakh",
        "₹5–10 lakh",
        "Above ₹10 lakh",
      ],
      locationSection: "Location",
      locationTitle: "Where are you applying from?",
      locationPlaceholder: "Enter your city or district",
      back: "← Back",
      continue: "Continue →",
      finish: "Find my schemes →",
    },

    Hindi: {
      brandSub: "योजना मिलान",
      step: "चरण",
      of: "में से",
      section: "अपनी जरूरत के बारे में बताएं",
      questions: [
        {
          title: "आपको वित्तीय सहायता किस लिए चाहिए?",
          options: [
            "व्यवसाय शुरू करना",
            "मौजूदा व्यवसाय का विस्तार",
            "शिक्षा",
            "अन्य वित्तीय सहायता",
          ],
          field: "purpose",
        },
        {
          title: "आप किस प्रकार की गतिविधि में रुचि रखते हैं?",
          options: [
            "सिलाई और कपड़े",
            "खाना और कैटरिंग",
            "खुदरा व्यवसाय",
            "सेवा व्यवसाय",
            "अन्य",
          ],
          field: "businessType",
        },
      ],
      funding: "वित्तीय आवश्यकता",
      fundingTitle: "आपको कितनी वित्तीय सहायता चाहिए?",
      amountPlaceholder: "उदाहरण: 120000",
      amountHint: "भारतीय रुपये में अनुमानित राशि दर्ज करें।",
      incomeSection: "परिवार की जानकारी",
      incomeTitle: "आपकी अनुमानित वार्षिक पारिवारिक आय कितनी है?",
      incomePlaceholder: "आय सीमा चुनें",
      incomes: [
        "₹1 लाख से कम",
        "₹1–3 लाख",
        "₹3–5 लाख",
        "₹5–10 लाख",
        "₹10 लाख से अधिक",
      ],
      locationSection: "स्थान",
      locationTitle: "आप किस स्थान से आवेदन कर रहे हैं?",
      locationPlaceholder: "अपना शहर या जिला दर्ज करें",
      back: "← वापस",
      continue: "जारी रखें →",
      finish: "मेरी योजनाएं खोजें →",
    },

    Kannada: {
      brandSub: "ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ",
      step: "ಹಂತ",
      of: "ರಲ್ಲಿ",
      section: "ನಿಮ್ಮ ಅಗತ್ಯದ ಬಗ್ಗೆ ತಿಳಿಸಿ",
      questions: [
        {
          title: "ನಿಮಗೆ ಹಣಕಾಸಿನ ಸಹಾಯ ಯಾವ ಉದ್ದೇಶಕ್ಕಾಗಿ ಬೇಕು?",
          options: [
            "ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸಲು",
            "ಈಗಿರುವ ವ್ಯವಹಾರ ವಿಸ್ತರಿಸಲು",
            "ಶಿಕ್ಷಣ",
            "ಇತರ ಹಣಕಾಸಿನ ಸಹಾಯ",
          ],
          field: "purpose",
        },
        {
          title: "ನೀವು ಯಾವ ರೀತಿಯ ಚಟುವಟಿಕೆಯಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೀರಿ?",
          options: [
            "ಹೊಲಿಗೆ ಮತ್ತು ಉಡುಪು",
            "ಆಹಾರ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್",
            "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ",
            "ಸೇವಾ ವ್ಯವಹಾರ",
            "ಇತರೆ",
          ],
          field: "businessType",
        },
      ],
      funding: "ಹಣಕಾಸಿನ ಅಗತ್ಯ",
      fundingTitle: "ನಿಮಗೆ ಎಷ್ಟು ಹಣಕಾಸಿನ ಸಹಾಯ ಬೇಕು?",
      amountPlaceholder: "ಉದಾಹರಣೆ: 120000",
      amountHint: "ಭಾರತೀಯ ರೂಪಾಯಿಗಳಲ್ಲಿ ಅಂದಾಜು ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ.",
      incomeSection: "ಕುಟುಂಬದ ಮಾಹಿತಿ",
      incomeTitle: "ನಿಮ್ಮ ಅಂದಾಜು ವಾರ್ಷಿಕ ಕುಟುಂಬದ ಆದಾಯ ಎಷ್ಟು?",
      incomePlaceholder: "ಆದಾಯದ ಶ್ರೇಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      incomes: [
        "₹1 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ",
        "₹1–3 ಲಕ್ಷ",
        "₹3–5 ಲಕ್ಷ",
        "₹5–10 ಲಕ್ಷ",
        "₹10 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು",
      ],
      locationSection: "ಸ್ಥಳ",
      locationTitle: "ನೀವು ಯಾವ ಸ್ಥಳದಿಂದ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿದ್ದೀರಿ?",
      locationPlaceholder: "ನಿಮ್ಮ ನಗರ ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ನಮೂದಿಸಿ",
      back: "← ಹಿಂದೆ",
      continue: "ಮುಂದುವರಿಸಿ →",
      finish: "ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ →",
    },
  };

  const text = content[language] || content.English;

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

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
                {text.brandSub}
              </p>
            </div>

          </div>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
            {text.step} {step} {text.of} 5
          </span>

        </div>
      </header>


      {/* MAIN */}
      <main className="px-6 py-10 md:py-14">

        <div className="mx-auto max-w-3xl">

          {/* PROGRESS */}
          <div className="mb-8">

            <div className="flex justify-between text-xs font-semibold text-slate-400">
              <span>01</span>
              <span>05</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-[#0b2a5b] transition-all duration-500"
                style={{ width: `${step * 20}%` }}
              />

            </div>

          </div>


          {/* QUESTION CARD */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl md:p-10">

            {/* STEP 1 & 2 */}
            {step <= 2 && (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {text.section}
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
                  {text.questions[step - 1].title}
                </h2>

                <div className="mt-8 grid gap-3">

                  {text.questions[step - 1].options.map((option) => {

                    const field = text.questions[step - 1].field;
                    const selected = formData[field] === option;

                    return (
                      <button
                        key={option}
                        onClick={() =>
                          updateField(field, option)
                        }
                        className={`group flex items-center justify-between rounded-2xl border p-5 text-left ${
                          selected
                            ? "border-blue-600 bg-blue-50 shadow-sm"
                            : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:shadow-sm"
                        }`}
                      >

                        <span
                          className={`font-semibold ${
                            selected
                              ? "text-blue-900"
                              : "text-slate-700"
                          }`}
                        >
                          {option}
                        </span>

                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm ${
                            selected
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300 text-transparent"
                          }`}
                        >
                          ✓
                        </span>

                      </button>
                    );
                  })}

                </div>
              </>
            )}


            {/* STEP 3 */}
            {step === 3 && (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {text.funding}
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  {text.fundingTitle}
                </h2>

                <div className="relative mt-8">

                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      updateField("amount", e.target.value)
                    }
                    placeholder={text.amountPlaceholder}
                    className="w-full rounded-2xl border border-slate-300 py-5 pl-10 pr-5 text-lg font-semibold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                  />

                </div>

                <p className="mt-3 text-sm text-slate-400">
                  {text.amountHint}
                </p>
              </>
            )}


            {/* STEP 4 */}
            {step === 4 && (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {text.incomeSection}
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  {text.incomeTitle}
                </h2>

                <select
                  value={formData.income}
                  onChange={(e) =>
                    updateField("income", e.target.value)
                  }
                  className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-5 py-5 text-lg font-semibold text-slate-700 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">
                    {text.incomePlaceholder}
                  </option>

                  {text.incomes.map((income) => (
                    <option key={income} value={income}>
                      {income}
                    </option>
                  ))}
                </select>
              </>
            )}


            {/* STEP 5 */}
            {step === 5 && (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {text.locationSection}
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  {text.locationTitle}
                </h2>

                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    updateField("location", e.target.value)
                  }
                  placeholder={text.locationPlaceholder}
                  className="mt-8 w-full rounded-2xl border border-slate-300 px-5 py-5 text-lg font-semibold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </>
            )}


            {/* BUTTONS */}
            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-7">

              <button
                onClick={previousStep}
                disabled={step === 1}
                className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                {text.back}
              </button>

              <button
                onClick={nextStep}
                className="group rounded-xl bg-[#0b2a5b] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-950/10 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                {step === 5 ? text.finish : text.continue}

                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Questionnaire;