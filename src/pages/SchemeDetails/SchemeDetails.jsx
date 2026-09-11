import { useNavigate } from "react-router-dom";

function SchemeDetails() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const content = {
    English: {
      section: "Scheme details",
      back: "Back to recommendations",
      match: "Potentially suitable",
      title: "Entrepreneurship Support Scheme",
      subtitle:
        "A potential financial assistance option for individuals looking to start or expand a small business.",
      amount: "Up to ₹1,50,000",
      amountLabel: "Potential assistance",

      why: "Why this scheme matches",
      whyTitle: "A potential fit for your requirement",
      whyText:
        "Based on the information you provided, this scheme appears relevant to your business purpose, estimated requirement and profile.",

      points: [
        "Suitable for starting a small business",
        "Potential assistance within your requested amount",
        "Designed to support self-employment opportunities",
      ],

      keyInfo: "Key information",
      loan: "Potential assistance",
      interest: "Interest",
      interestValue: "Low interest",
      contribution: "Applicant contribution",
      contributionValue: "As applicable",

      eligibility: "Eligibility overview",
      eligibilityTitle: "Check the official requirements",
      eligibilityText:
        "Eligibility depends on factors such as income, applicant category, business activity, location and the official scheme guidelines.",

      important: "Important",
      disclaimer:
        "This recommendation is a demonstration based on mock data. Final eligibility, assistance amount and approval are determined by the official authority.",

      partner: "Find the right channel partner",
      partnerText:
        "See which authorized partner may be most suitable based on scheme compatibility, location and availability.",

      calculator: "Calculate EMI",
      calculatorLabel: "Financial planning",
      calculatorText:
        "Estimate your potential monthly repayment.",

      documents: "Check documents",
      documentsLabel: "Application readiness",
      documentsText:
        "Review the documents you may need.",

      partnerLabel: "Partner matching",
      government: "Government assistance",
      next: "Next",
    },

    Hindi: {
      section: "योजना विवरण",
      back: "अनुशंसाओं पर वापस जाएं",
      match: "संभावित रूप से उपयुक्त",
      title: "उद्यमिता सहायता योजना",
      subtitle:
        "छोटा व्यवसाय शुरू करने या बढ़ाने वाले लोगों के लिए संभावित वित्तीय सहायता विकल्प।",
      amount: "₹1,50,000 तक",
      amountLabel: "संभावित सहायता",

      why: "यह योजना क्यों उपयुक्त है",
      whyTitle: "आपकी आवश्यकता के लिए संभावित रूप से उपयुक्त",
      whyText:
        "आपके द्वारा दी गई जानकारी के आधार पर यह योजना आपके व्यवसाय के उद्देश्य, अनुमानित आवश्यकता और प्रोफ़ाइल के लिए उपयुक्त दिखाई देती है।",

      points: [
        "छोटा व्यवसाय शुरू करने के लिए उपयुक्त",
        "आपकी अनुरोधित राशि के भीतर संभावित सहायता",
        "स्वरोजगार के अवसरों को समर्थन देने के लिए बनाई गई",
      ],

      keyInfo: "मुख्य जानकारी",
      loan: "संभावित सहायता",
      interest: "ब्याज",
      interestValue: "कम ब्याज",
      contribution: "आवेदक का योगदान",
      contributionValue: "लागू नियमों के अनुसार",

      eligibility: "पात्रता का अवलोकन",
      eligibilityTitle: "आधिकारिक आवश्यकताओं की जांच करें",
      eligibilityText:
        "पात्रता आय, आवेदक की श्रेणी, व्यवसाय गतिविधि, स्थान और आधिकारिक योजना दिशानिर्देशों जैसे कारकों पर निर्भर करती है।",

      important: "महत्वपूर्ण",
      disclaimer:
        "यह अनुशंसा मॉक डेटा पर आधारित प्रदर्शन के लिए है। अंतिम पात्रता, सहायता राशि और स्वीकृति संबंधित आधिकारिक प्राधिकरण द्वारा निर्धारित की जाती है।",

      partner: "सही चैनल पार्टनर खोजें",
      partnerText:
        "योजना की अनुकूलता, स्थान और उपलब्धता के आधार पर सबसे उपयुक्त अधिकृत पार्टनर देखें।",

      calculator: "EMI की गणना करें",
      calculatorLabel: "वित्तीय योजना",
      calculatorText:
        "अपनी संभावित मासिक भुगतान राशि का अनुमान लगाएं।",

      documents: "दस्तावेज़ जांचें",
      documentsLabel: "आवेदन की तैयारी",
      documentsText:
        "आवश्यक दस्तावेज़ों की समीक्षा करें।",

      partnerLabel: "पार्टनर मिलान",
      government: "सरकारी सहायता",
      next: "अगला",
    },

    Kannada: {
      section: "ಯೋಜನೆ ವಿವರಗಳು",
      back: "ಶಿಫಾರಸುಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
      match: "ಸಂಭಾವ್ಯವಾಗಿ ಸೂಕ್ತ",
      title: "ಉದ್ಯಮಿತ್ವ ಬೆಂಬಲ ಯೋಜನೆ",
      subtitle:
        "ಸಣ್ಣ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಅಥವಾ ವಿಸ್ತರಿಸಲು ಬಯಸುವವರಿಗೆ ಸಂಭಾವ್ಯ ಹಣಕಾಸು ಸಹಾಯದ ಆಯ್ಕೆ.",
      amount: "₹1,50,000 ವರೆಗೆ",
      amountLabel: "ಸಂಭಾವ್ಯ ಸಹಾಯ",

      why: "ಈ ಯೋಜನೆ ಏಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ",
      whyTitle: "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಸಂಭಾವ್ಯವಾಗಿ ಸೂಕ್ತ",
      whyText:
        "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ, ಈ ಯೋಜನೆಯು ನಿಮ್ಮ ವ್ಯವಹಾರದ ಉದ್ದೇಶ, ಅಂದಾಜು ಅಗತ್ಯ ಮತ್ತು ಪ್ರೊಫೈಲ್‌ಗೆ ಸೂಕ್ತವಾಗಿ ಕಾಣುತ್ತದೆ.",

      points: [
        "ಸಣ್ಣ ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸಲು ಸೂಕ್ತ",
        "ನೀವು ಕೇಳಿದ ಮೊತ್ತದೊಳಗೆ ಸಂಭಾವ್ಯ ಸಹಾಯ",
        "ಸ್ವಯಂ ಉದ್ಯೋಗದ ಅವಕಾಶಗಳನ್ನು ಬೆಂಬಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",
      ],

      keyInfo: "ಮುಖ್ಯ ಮಾಹಿತಿ",
      loan: "ಸಂಭಾವ್ಯ ಸಹಾಯ",
      interest: "ಬಡ್ಡಿ",
      interestValue: "ಕಡಿಮೆ ಬಡ್ಡಿ",
      contribution: "ಅರ್ಜಿದಾರರ ಕೊಡುಗೆ",
      contributionValue: "ಅನ್ವಯಿಸುವ ನಿಯಮಗಳಂತೆ",

      eligibility: "ಅರ್ಹತೆಯ ಅವಲೋಕನ",
      eligibilityTitle: "ಅಧಿಕೃತ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
      eligibilityText:
        "ಅರ್ಹತೆಯು ಆದಾಯ, ಅರ್ಜಿದಾರರ ವರ್ಗ, ವ್ಯವಹಾರ ಚಟುವಟಿಕೆ, ಸ್ಥಳ ಮತ್ತು ಅಧಿಕೃತ ಯೋಜನೆಯ ಮಾರ್ಗಸೂಚಿಗಳಂತಹ ಅಂಶಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ.",

      important: "ಮುಖ್ಯ",
      disclaimer:
        "ಈ ಶಿಫಾರಸು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾಕ್ ಡೇಟಾವನ್ನು ಆಧರಿಸಿದೆ. ಅಂತಿಮ ಅರ್ಹತೆ, ಸಹಾಯದ ಮೊತ್ತ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಅಧಿಕೃತ ಸಂಸ್ಥೆಯೇ ನಿರ್ಧರಿಸುತ್ತದೆ.",

      partner: "ಸರಿಯಾದ ಚಾನೆಲ್ ಪಾಲುದಾರರನ್ನು ಹುಡುಕಿ",
      partnerText:
        "ಯೋಜನೆಯ ಹೊಂದಾಣಿಕೆ, ಸ್ಥಳ ಮತ್ತು ಲಭ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ ಸೂಕ್ತ ಅಧಿಕೃತ ಪಾಲುದಾರರನ್ನು ನೋಡಿ.",

      calculator: "EMI ಲೆಕ್ಕ ಹಾಕಿ",
      calculatorLabel: "ಹಣಕಾಸು ಯೋಜನೆ",
      calculatorText:
        "ನಿಮ್ಮ ಸಂಭಾವ್ಯ ಮಾಸಿಕ ಮರುಪಾವತಿಯನ್ನು ಅಂದಾಜಿಸಿ.",

      documents: "ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
      documentsLabel: "ಅರ್ಜಿಯ ಸಿದ್ಧತೆ",
      documentsText:
        "ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

      partnerLabel: "ಪಾಲುದಾರ ಹೊಂದಾಣಿಕೆ",
      government: "ಸರ್ಕಾರಿ ಸಹಾಯ",
      next: "ಮುಂದೆ",
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
                {text.section}
              </p>
            </div>

          </div>

        </div>
      </header>


      <main className="px-6 py-12 md:py-16">

        <div className="mx-auto max-w-6xl">

          {/* BACK */}
          <button
            onClick={() => navigate("/recommendations")}
            className="text-sm font-bold text-slate-500 hover:text-blue-700"
          >
            ← {text.back}
          </button>


          {/* HERO */}
          <section className="mt-8 overflow-hidden rounded-[2rem] bg-[#061a3b] text-white shadow-xl">

            <div className="grid lg:grid-cols-[1fr_300px]">

              <div className="p-8 md:p-10">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-bold text-emerald-300">
                    {text.match}
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100">
                    {text.government}
                  </span>

                </div>

                <h2 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
                  {text.title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/70 md:text-lg">
                  {text.subtitle}
                </p>

              </div>


              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">

                <div className="text-center">

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200/50">
                    {text.amountLabel}
                  </p>

                  <p className="mt-3 text-4xl font-extrabold">
                    {text.amount}
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* WHY MATCH */}
          <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {text.why}
              </p>

              <h3 className="mt-3 text-2xl font-extrabold">
                {text.whyTitle}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {text.whyText}
              </p>

              <div className="mt-7 space-y-4">

                {text.points.map((point, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
                  >

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                      ✓
                    </div>

                    <p className="pt-1 text-sm font-semibold text-slate-700">
                      {point}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* SUITABILITY */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {text.match}
              </p>

              <div className="mt-7 flex items-center justify-center">

                <div className="flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-emerald-100">

                  <div className="text-center">

                    <p className="text-lg font-extrabold text-[#061a3b]">
                      {text.match}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-slate-400">
                      Based on your requirements
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-7 rounded-2xl bg-blue-50 p-4">

                <p className="text-sm font-semibold leading-6 text-blue-900">
                  The recommendation is based on your submitted requirements
                  and the mock scheme rules used in this demonstration.
                </p>

              </div>

            </div>

          </section>


          {/* KEY INFO */}
          <section className="mt-10">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.keyInfo}
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.loan}
                </p>

                <p className="mt-3 text-xl font-extrabold text-slate-900">
                  ₹1,50,000
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.interest}
                </p>

                <p className="mt-3 text-xl font-extrabold text-slate-900">
                  {text.interestValue}
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.contribution}
                </p>

                <p className="mt-3 text-xl font-extrabold text-slate-900">
                  {text.contributionValue}
                </p>

              </div>

            </div>

          </section>


          {/* ELIGIBILITY */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.eligibility}
            </p>

            <h3 className="mt-3 text-2xl font-extrabold">
              {text.eligibilityTitle}
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
              {text.eligibilityText}
            </p>

          </section>


          {/* PARTNER CTA */}
          <section className="mt-10 overflow-hidden rounded-3xl bg-[#061a3b] p-7 text-white shadow-xl md:p-9">

            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  {text.partnerLabel}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
                  {text.partner}
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100/65">
                  {text.partnerText}
                </p>

              </div>


              <button
                onClick={() => navigate("/partners")}
                className="shrink-0 rounded-xl bg-white px-6 py-4 font-bold text-[#061a3b] shadow-lg hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.partner} →
              </button>

            </div>

          </section>


          {/* OTHER ACTIONS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {/* CALCULATOR */}
            <button
              onClick={() => navigate("/calculator")}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                {text.calculatorLabel}
              </p>

              <p className="mt-2 text-lg font-extrabold">
                {text.calculator} →
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {text.calculatorText}
              </p>

            </button>


            {/* DOCUMENTS */}
            <button
              onClick={() => navigate("/documents")}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                {text.documentsLabel}
              </p>

              <p className="mt-2 text-lg font-extrabold">
                {text.documents} →
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {text.documentsText}
              </p>

            </button>

          </div>


          {/* DISCLAIMER */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              <strong>{text.important}:</strong>{" "}
              {text.disclaimer}
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default SchemeDetails;