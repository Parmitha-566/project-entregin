import { useNavigate } from "react-router-dom";

function SchemeDetails() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const content = {
    English: {
      badge: "94% MATCH",
      title: "Entrepreneurship Support Scheme",
      subtitle:
        "A potential match based on your requirements and profile.",
      assistance: "Potential assistance",
      amount: "₹1,50,000",
      why: "Why this matches you",
      reasons: [
        "Your requirement is related to starting a business.",
        "Your selected activity matches the supported business category.",
        "Your requested funding is within the indicative assistance amount.",
        "Your profile can be evaluated against the scheme's eligibility rules.",
      ],
      info: "Key information",
      infoItems: [
        ["Financial assistance", "Up to ₹1,50,000"],
        ["Support type", "Low interest"],
        ["Purpose", "Business establishment"],
        ["Application route", "Authorized channel partner"],
      ],
      eligibility: "Eligibility overview",
      eligibilityText:
        "The scheme may have specific requirements related to income, applicant category, business activity, documentation and other conditions.",
      note:
        "This recommendation is based on the information provided. Final eligibility and approval are determined by the respective official scheme authority.",
      calculator: "Calculate EMI",
      documents: "Check documents",
      back: "← Back to schemes",
    },

    Hindi: {
      badge: "94% मिलान",
      title: "उद्यमिता सहायता योजना",
      subtitle:
        "आपकी आवश्यकताओं और प्रोफ़ाइल के आधार पर एक संभावित मिलान।",
      assistance: "संभावित सहायता",
      amount: "₹1,50,000",
      why: "यह योजना आपके लिए क्यों उपयुक्त है",
      reasons: [
        "आपकी आवश्यकता व्यवसाय शुरू करने से संबंधित है।",
        "आपकी चुनी गई गतिविधि समर्थित व्यवसाय श्रेणी से मेल खाती है।",
        "आपकी मांगी गई राशि संभावित सहायता सीमा के भीतर है।",
        "आपकी प्रोफ़ाइल का मूल्यांकन योजना की पात्रता नियमों के आधार पर किया जा सकता है।",
      ],
      info: "मुख्य जानकारी",
      infoItems: [
        ["वित्तीय सहायता", "₹1,50,000 तक"],
        ["सहायता का प्रकार", "कम ब्याज"],
        ["उद्देश्य", "व्यवसाय शुरू करना"],
        ["आवेदन का माध्यम", "अधिकृत चैनल पार्टनर"],
      ],
      eligibility: "पात्रता का अवलोकन",
      eligibilityText:
        "योजना में आय, आवेदक श्रेणी, व्यवसाय गतिविधि, दस्तावेज़ और अन्य शर्तों से संबंधित विशेष आवश्यकताएं हो सकती हैं।",
      note:
        "यह सिफारिश आपके द्वारा दी गई जानकारी पर आधारित है। अंतिम पात्रता और स्वीकृति संबंधित आधिकारिक योजना प्राधिकरण द्वारा निर्धारित की जाती है।",
      calculator: "EMI की गणना करें",
      documents: "दस्तावेज़ जांचें",
      back: "← योजनाओं पर वापस",
    },

    Kannada: {
      badge: "94% ಹೊಂದಾಣಿಕೆ",
      title: "ಉದ್ಯಮಶೀಲತಾ ಸಹಾಯ ಯೋಜನೆ",
      subtitle:
        "ನಿಮ್ಮ ಅಗತ್ಯಗಳು ಮತ್ತು ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ ಒಂದು ಸಾಧ್ಯವಾದ ಹೊಂದಾಣಿಕೆ.",
      assistance: "ಸಂಭಾವ್ಯ ಸಹಾಯ",
      amount: "₹1,50,000",
      why: "ಈ ಯೋಜನೆ ನಿಮಗೆ ಏಕೆ ಸೂಕ್ತವಾಗಿದೆ",
      reasons: [
        "ನಿಮ್ಮ ಅಗತ್ಯವು ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸುವುದಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ.",
        "ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಚಟುವಟಿಕೆಯು ಬೆಂಬಲಿತ ವ್ಯವಹಾರ ವರ್ಗಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.",
        "ನೀವು ಕೇಳಿರುವ ಹಣಕಾಸಿನ ಮೊತ್ತವು ಸೂಚಿಸಲಾದ ಸಹಾಯದ ಮಿತಿಯೊಳಗಿದೆ.",
        "ಯೋಜನೆಯ ಅರ್ಹತಾ ನಿಯಮಗಳ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಬಹುದು.",
      ],
      info: "ಪ್ರಮುಖ ಮಾಹಿತಿ",
      infoItems: [
        ["ಹಣಕಾಸಿನ ಸಹಾಯ", "₹1,50,000 ವರೆಗೆ"],
        ["ಸಹಾಯದ ವಿಧ", "ಕಡಿಮೆ ಬಡ್ಡಿ"],
        ["ಉದ್ದೇಶ", "ವ್ಯವಹಾರ ಪ್ರಾರಂಭ"],
        ["ಅರ್ಜಿ ಮಾರ್ಗ", "ಅಧಿಕೃತ ಚಾನೆಲ್ ಪಾಲುದಾರ"],
      ],
      eligibility: "ಅರ್ಹತೆಯ ಅವಲೋಕನ",
      eligibilityText:
        "ಈ ಯೋಜನೆಯು ಆದಾಯ, ಅರ್ಜಿದಾರರ ವರ್ಗ, ವ್ಯವಹಾರ ಚಟುವಟಿಕೆ, ದಾಖಲೆಗಳು ಮತ್ತು ಇತರ ಷರತ್ತುಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಹೊಂದಿರಬಹುದು.",
      note:
        "ಈ ಶಿಫಾರಸು ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯನ್ನು ಆಧರಿಸಿದೆ. ಅಂತಿಮ ಅರ್ಹತೆ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಸಂಬಂಧಿತ ಅಧಿಕೃತ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ ನಿರ್ಧರಿಸುತ್ತದೆ.",
      calculator: "EMI ಲೆಕ್ಕ ಹಾಕಿ",
      documents: "ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
      back: "← ಯೋಜನೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
    },
  };

  const text = content[language] || content.English;

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
                {text.why}
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
            onClick={() => navigate("/recommendations")}
            className="mb-8 text-sm font-semibold text-slate-500 hover:text-blue-700"
          >
            {text.back}
          </button>


          {/* HERO */}
          <div className="rounded-[2rem] bg-[#061a3b] p-7 text-white shadow-xl md:p-10">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>

                <span className="inline-flex rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-extrabold tracking-[0.15em] text-emerald-300">
                  {text.badge}
                </span>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {text.title}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100/70">
                  {text.subtitle}
                </p>

              </div>


              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200/60">
                  {text.assistance}
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  {text.amount}
                </p>

              </div>

            </div>

          </div>


          {/* WHY MATCH */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.why}
            </p>

            <div className="mt-6 space-y-4">

              {text.reasons.map((reason) => (

                <div
                  key={reason}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 font-bold text-emerald-600">
                    ✓
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {reason}
                  </p>

                </div>

              ))}

            </div>

          </section>


          {/* KEY INFORMATION */}
          <section className="mt-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.info}
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">

              {text.infoItems.map(([label, value]) => (

                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-400">
                    {label}
                  </p>

                  <p className="mt-2 font-extrabold text-slate-900">
                    {value}
                  </p>
                </div>

              ))}

            </div>

          </section>


          {/* ELIGIBILITY */}
          <section className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/60 p-7 md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.eligibility}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              {text.eligibilityText}
            </p>

          </section>


          {/* DISCLAIMER */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              <strong>Important:</strong> {text.note}
            </p>

          </div>


          {/* ACTIONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
              onClick={() => navigate("/calculator")}
              className="flex-1 rounded-xl bg-[#0b2a5b] px-6 py-4 font-bold text-white shadow-lg hover:-translate-y-1 hover:bg-blue-800"
            >
              {text.calculator} →
            </button>

            <button
              onClick={() => navigate("/documents")}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
            >
              {text.documents} →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default SchemeDetails;