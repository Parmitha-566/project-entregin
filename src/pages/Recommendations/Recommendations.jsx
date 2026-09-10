import { useNavigate } from "react-router-dom";

function Recommendations() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const content = {
    English: {
      section: "Scheme recommendations",
      title: "Schemes that may be suitable for you.",
      subtitle:
        "Based on the information you provided, here are some options to explore.",
      profile: "Your profile",
      purpose: "Purpose",
      requirement: "Requirement",
      activity: "Activity",
      location: "Location",
      startBusiness: "Start a business",
      tailoring: "Tailoring & garments",
      schemes: [
        {
          match: "94%",
          name: "Entrepreneurship Support Scheme",
          amount: "Up to ₹1,50,000",
          type: "Low interest",
          description:
            "A potential option based on your business requirement and profile.",
        },
        {
          match: "88%",
          name: "Small Business Assistance Scheme",
          amount: "Up to ₹2,00,000",
          type: "Subsidized",
          description:
            "May provide financial support for eligible small business activities.",
        },
        {
          match: "81%",
          name: "Self Employment Finance Scheme",
          amount: "Up to ₹1,00,000",
          type: "Concessional",
          description:
            "An option to explore for eligible self-employment requirements.",
        },
      ],
      view: "View details",
      calculator: "Calculate EMI",
      disclaimer:
        "Recommendations shown here are for demonstration. Final eligibility is determined by the respective official scheme authority.",
    },

    Hindi: {
      section: "योजना सुझाव",
      title: "आपके लिए उपयुक्त हो सकने वाली योजनाएं।",
      subtitle:
        "आपके द्वारा दी गई जानकारी के आधार पर, यहां कुछ विकल्प दिए गए हैं।",
      profile: "आपकी प्रोफ़ाइल",
      purpose: "उद्देश्य",
      requirement: "आवश्यकता",
      activity: "गतिविधि",
      location: "स्थान",
      startBusiness: "व्यवसाय शुरू करना",
      tailoring: "सिलाई और कपड़े",
      schemes: [
        {
          match: "94%",
          name: "उद्यमिता सहायता योजना",
          amount: "₹1,50,000 तक",
          type: "कम ब्याज",
          description:
            "आपकी व्यावसायिक आवश्यकता और प्रोफ़ाइल के आधार पर एक संभावित विकल्प।",
        },
        {
          match: "88%",
          name: "लघु व्यवसाय सहायता योजना",
          amount: "₹2,00,000 तक",
          type: "सब्सिडी",
          description:
            "पात्र छोटे व्यवसायों के लिए वित्तीय सहायता का संभावित विकल्प।",
        },
        {
          match: "81%",
          name: "स्वरोजगार वित्त योजना",
          amount: "₹1,00,000 तक",
          type: "रियायती",
          description:
            "पात्र स्वरोजगार आवश्यकताओं के लिए एक विकल्प जिसे आप देख सकते हैं।",
        },
      ],
      view: "विवरण देखें",
      calculator: "EMI की गणना करें",
      disclaimer:
        "यहां दिखाई गई सिफारिशें केवल प्रदर्शन के लिए हैं। अंतिम पात्रता संबंधित आधिकारिक योजना प्राधिकरण द्वारा निर्धारित की जाती है।",
    },

    Kannada: {
      section: "ಯೋಜನೆ ಶಿಫಾರಸುಗಳು",
      title: "ನಿಮಗೆ ಸೂಕ್ತವಾಗಿರಬಹುದಾದ ಯೋಜನೆಗಳು.",
      subtitle:
        "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ, ಪರಿಶೀಲಿಸಲು ಕೆಲವು ಆಯ್ಕೆಗಳನ್ನು ಇಲ್ಲಿ ನೀಡಲಾಗಿದೆ.",
      profile: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್",
      purpose: "ಉದ್ದೇಶ",
      requirement: "ಅಗತ್ಯ",
      activity: "ಚಟುವಟಿಕೆ",
      location: "ಸ್ಥಳ",
      startBusiness: "ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸುವುದು",
      tailoring: "ಹೊಲಿಗೆ ಮತ್ತು ಉಡುಪು",
      schemes: [
        {
          match: "94%",
          name: "ಉದ್ಯಮಶೀಲತಾ ಸಹಾಯ ಯೋಜನೆ",
          amount: "₹1,50,000 ವರೆಗೆ",
          type: "ಕಡಿಮೆ ಬಡ್ಡಿ",
          description:
            "ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯ ಮತ್ತು ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ ಒಂದು ಸಾಧ್ಯವಾದ ಆಯ್ಕೆ.",
        },
        {
          match: "88%",
          name: "ಸಣ್ಣ ವ್ಯಾಪಾರ ಸಹಾಯ ಯೋಜನೆ",
          amount: "₹2,00,000 ವರೆಗೆ",
          type: "ಸಬ್ಸಿಡಿ",
          description:
            "ಅರ್ಹ ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗೆ ಹಣಕಾಸಿನ ಸಹಾಯ ನೀಡಬಹುದಾದ ಆಯ್ಕೆ.",
        },
        {
          match: "81%",
          name: "ಸ್ವಯಂ ಉದ್ಯೋಗ ಹಣಕಾಸು ಯೋಜನೆ",
          amount: "₹1,00,000 ವರೆಗೆ",
          type: "ರಿಯಾಯಿತಿ",
          description:
            "ಅರ್ಹ ಸ್ವಯಂ ಉದ್ಯೋಗ ಅಗತ್ಯಗಳಿಗಾಗಿ ಪರಿಶೀಲಿಸಬಹುದಾದ ಆಯ್ಕೆ.",
        },
      ],
      view: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      calculator: "EMI ಲೆಕ್ಕ ಹಾಕಿ",
      disclaimer:
        "ಇಲ್ಲಿ ತೋರಿಸಿರುವ ಶಿಫಾರಸುಗಳು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಅಂತಿಮ ಅರ್ಹತೆಯನ್ನು ಸಂಬಂಧಿತ ಅಧಿಕೃತ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ ನಿರ್ಧರಿಸುತ್ತದೆ.",
    },
  };

  const text = content[language] || content.English;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

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

        <div className="mx-auto max-w-6xl">

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


          {/* PROFILE SUMMARY */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-700">
                  {text.profile}
                </p>

                <h3 className="mt-1 text-xl font-extrabold">
                  Your submitted information
                </h3>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:flex">
                ✓
              </div>

            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                [text.purpose, text.startBusiness],
                [text.requirement, "₹1,20,000"],
                [text.activity, text.tailoring],
                [text.location, "Bengaluru"],
              ].map(([label, value]) => (

                <div
                  key={label}
                  className="rounded-2xl bg-slate-50 p-4"
                >
                  <p className="text-xs font-semibold text-slate-400">
                    {label}
                  </p>

                  <p className="mt-2 font-bold text-slate-800">
                    {value}
                  </p>
                </div>

              ))}

            </div>

          </div>


          {/* SCHEMES */}
          <div className="mt-10 space-y-5">

            {text.schemes.map((scheme, index) => (

              <div
                key={scheme.name}
                className={`group rounded-3xl border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl md:p-7 ${
                  index === 0
                    ? "border-blue-200"
                    : "border-slate-200"
                }`}
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                        {scheme.match} Match
                      </span>

                      {index === 0 && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                          Best Match
                        </span>
                      )}

                    </div>

                    <h3 className="mt-4 text-xl font-extrabold text-slate-900 md:text-2xl">
                      {scheme.name}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      {scheme.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span className="rounded-xl bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                        {scheme.amount}
                      </span>

                      <span className="rounded-xl bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                        {scheme.type}
                      </span>

                    </div>

                  </div>


                  {/* ACTION */}
                  <button
                    onClick={() => navigate("/scheme-details")}
                    className="shrink-0 rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
                  >
                    {text.view} →
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* CALCULATOR CTA */}
          <div className="mt-10 rounded-3xl bg-[#061a3b] p-7 text-white shadow-xl md:p-9">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Next step
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Understand your potential repayment.
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100/65">
                  Explore the estimated EMI and total repayment for your requirement.
                </p>

              </div>

              <button
                onClick={() => navigate("/calculator")}
                className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-[#061a3b] hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.calculator} →
              </button>

            </div>

          </div>


          {/* DISCLAIMER */}
          <p className="mt-7 text-center text-xs leading-6 text-slate-400">
            {text.disclaimer}
          </p>

        </div>

      </main>

    </div>
  );
}

export default Recommendations;