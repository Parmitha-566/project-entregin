import { useNavigate } from "react-router-dom";

function Recommendations() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const savedProfile = JSON.parse(
    localStorage.getItem("entreginProfile") || "{}"
  );

  const content = {
    English: {
      section: "Scheme recommendations",
      title: "Schemes that may suit your requirement",
      subtitle:
        "We found these options based on the information you provided.",
      requirement: "Your requirement",
      purpose: "Purpose",
      businessType: "Business type",
      amount: "Project requirement",
      income: "Annual income",
      location: "Location",

      purposeValue: "Start a business",
      businessValue: "Tailoring & garments",
      incomeValue: "₹3 – ₹5 lakh",

      found: "Potentially suitable schemes",
      basedOn: "Based on your information",

      why: "Why this may suit you",
      funding: "Potential assistance",
      interest: "Interest",
      eligibility: "Eligibility",
      suitable: "Potentially suitable",
      support: "Financial assistance",

      scheme1Description:
        "Financial assistance for individuals looking to start a small business.",
      scheme1Reason1:
        "Supports new business activities",
      scheme1Reason2:
        "Assistance range covers your requirement",
      scheme1Reason3:
        "Suitable for small business purposes",

      scheme2Description:
        "Support for eligible individuals establishing or expanding a small business.",
      scheme2Reason1:
        "Supports small business activities",
      scheme2Reason2:
        "Higher assistance limit",
      scheme2Reason3:
        "Suitable for business expansion and establishment",

      scheme3Description:
        "Financial support option for individuals pursuing self-employment activities.",
      scheme3Reason1:
        "Supports self-employment",
      scheme3Reason2:
        "Suitable for individual applicants",
      scheme3Reason3:
        "Concessional financing option",

      viewDetails: "View scheme details",

      next: "What happens next?",
      step1: "Review scheme eligibility",
      step2: "Estimate your potential EMI",
      step3: "Find a suitable channel partner",

      calculator: "Calculate EMI",

      disclaimer:
        "These recommendations are based on mock scheme rules for demonstration. Final eligibility, assistance amount and approval are determined by the official authority.",
    },

    Hindi: {
      section: "योजना अनुशंसाएं",
      title: "आपकी आवश्यकता के लिए उपयुक्त योजनाएं",
      subtitle:
        "आपके द्वारा दी गई जानकारी के आधार पर हमने ये विकल्प पाए हैं।",
      requirement: "आपकी आवश्यकता",
      purpose: "उद्देश्य",
      businessType: "व्यवसाय का प्रकार",
      amount: "परियोजना आवश्यकता",
      income: "वार्षिक आय",
      location: "स्थान",

      purposeValue: "व्यवसाय शुरू करना",
      businessValue: "टेलरिंग और कपड़े",
      incomeValue: "₹3 – ₹5 लाख",

      found: "संभावित रूप से उपयुक्त योजनाएं",
      basedOn: "आपकी जानकारी के आधार पर",

      why: "यह योजना क्यों उपयुक्त हो सकती है",
      funding: "संभावित सहायता",
      interest: "ब्याज",
      eligibility: "पात्रता",
      suitable: "संभावित रूप से उपयुक्त",
      support: "वित्तीय सहायता",

      scheme1Description:
        "छोटा व्यवसाय शुरू करने वाले व्यक्तियों के लिए वित्तीय सहायता।",
      scheme1Reason1:
        "नए व्यवसायों को सहायता",
      scheme1Reason2:
        "सहायता सीमा आपकी आवश्यकता को पूरा करती है",
      scheme1Reason3:
        "छोटे व्यवसाय के लिए उपयुक्त",

      scheme2Description:
        "छोटा व्यवसाय शुरू या विस्तारित करने वाले पात्र व्यक्तियों के लिए सहायता।",
      scheme2Reason1:
        "छोटे व्यवसायों को सहायता",
      scheme2Reason2:
        "अधिकतम सहायता सीमा अधिक",
      scheme2Reason3:
        "व्यवसाय शुरू करने और विस्तार के लिए उपयुक्त",

      scheme3Description:
        "स्वरोजगार गतिविधियों के लिए वित्तीय सहायता का विकल्प।",
      scheme3Reason1:
        "स्वरोजगार को सहायता",
      scheme3Reason2:
        "व्यक्तिगत आवेदकों के लिए उपयुक्त",
      scheme3Reason3:
        "रियायती वित्तपोषण विकल्प",

      viewDetails: "योजना का विवरण देखें",

      next: "आगे क्या होगा?",
      step1: "योजना की पात्रता देखें",
      step2: "संभावित EMI का अनुमान लगाएं",
      step3: "उपयुक्त चैनल पार्टनर खोजें",

      calculator: "EMI की गणना करें",

      disclaimer:
        "ये अनुशंसाएं प्रदर्शन के लिए मॉक योजना नियमों पर आधारित हैं। अंतिम पात्रता, सहायता राशि और स्वीकृति आधिकारिक प्राधिकरण द्वारा निर्धारित की जाती है।",
    },

    Kannada: {
      section: "ಯೋಜನೆ ಶಿಫಾರಸುಗಳು",
      title: "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಸೂಕ್ತವಾಗಬಹುದಾದ ಯೋಜನೆಗಳು",
      subtitle:
        "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಈ ಆಯ್ಕೆಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲಾಗಿದೆ.",
      requirement: "ನಿಮ್ಮ ಅಗತ್ಯ",
      purpose: "ಉದ್ದೇಶ",
      businessType: "ವ್ಯವಹಾರದ ಪ್ರಕಾರ",
      amount: "ಯೋಜನೆಯ ಅಗತ್ಯ",
      income: "ವಾರ್ಷಿಕ ಆದಾಯ",
      location: "ಸ್ಥಳ",

      purposeValue: "ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸುವುದು",
      businessValue: "ಟೈಲರಿಂಗ್ ಮತ್ತು ಉಡುಪುಗಳು",
      incomeValue: "₹3 – ₹5 ಲಕ್ಷ",

      found: "ಸಂಭಾವ್ಯವಾಗಿ ಸೂಕ್ತವಾದ ಯೋಜನೆಗಳು",
      basedOn: "ನಿಮ್ಮ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ",

      why: "ಈ ಯೋಜನೆ ಏಕೆ ಸೂಕ್ತವಾಗಬಹುದು",
      funding: "ಸಂಭಾವ್ಯ ಸಹಾಯ",
      interest: "ಬಡ್ಡಿ",
      eligibility: "ಅರ್ಹತೆ",
      suitable: "ಸಂಭಾವ್ಯವಾಗಿ ಸೂಕ್ತ",
      support: "ಹಣಕಾಸಿನ ಸಹಾಯ",

      scheme1Description:
        "ಸಣ್ಣ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಬಯಸುವವರಿಗೆ ಹಣಕಾಸಿನ ಸಹಾಯ.",
      scheme1Reason1:
        "ಹೊಸ ವ್ಯವಹಾರಗಳಿಗೆ ಬೆಂಬಲ",
      scheme1Reason2:
        "ಸಹಾಯದ ಮಿತಿ ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಪೂರೈಸುತ್ತದೆ",
      scheme1Reason3:
        "ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗೆ ಸೂಕ್ತ",

      scheme2Description:
        "ಸಣ್ಣ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸುವ ಅಥವಾ ವಿಸ್ತರಿಸುವ ಅರ್ಹ ವ್ಯಕ್ತಿಗಳಿಗೆ ಬೆಂಬಲ.",
      scheme2Reason1:
        "ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗೆ ಬೆಂಬಲ",
      scheme2Reason2:
        "ಹೆಚ್ಚಿನ ಸಹಾಯ ಮಿತಿ",
      scheme2Reason3:
        "ವ್ಯವಹಾರ ಪ್ರಾರಂಭ ಮತ್ತು ವಿಸ್ತರಣೆಗೆ ಸೂಕ್ತ",

      scheme3Description:
        "ಸ್ವಯಂ ಉದ್ಯೋಗ ಚಟುವಟಿಕೆಗಳನ್ನು ಕೈಗೊಳ್ಳುವವರಿಗೆ ಹಣಕಾಸಿನ ಸಹಾಯದ ಆಯ್ಕೆ.",
      scheme3Reason1:
        "ಸ್ವಯಂ ಉದ್ಯೋಗಕ್ಕೆ ಬೆಂಬಲ",
      scheme3Reason2:
        "ವೈಯಕ್ತಿಕ ಅರ್ಜಿದಾರರಿಗೆ ಸೂಕ್ತ",
      scheme3Reason3:
        "ರಿಯಾಯಿತಿ ಹಣಕಾಸಿನ ಆಯ್ಕೆ",

      viewDetails: "ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ನೋಡಿ",

      next: "ಮುಂದೇನು?",
      step1: "ಯೋಜನೆಯ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      step2: "ಸಂಭಾವ್ಯ EMI ಅಂದಾಜಿಸಿ",
      step3: "ಸೂಕ್ತ ಚಾನೆಲ್ ಪಾಲುದಾರರನ್ನು ಹುಡುಕಿ",

      calculator: "EMI ಲೆಕ್ಕ ಹಾಕಿ",

      disclaimer:
        "ಈ ಶಿಫಾರಸುಗಳು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾಕ್ ಯೋಜನೆ ನಿಯಮಗಳನ್ನು ಆಧರಿಸಿವೆ. ಅಂತಿಮ ಅರ್ಹತೆ, ಸಹಾಯದ ಮೊತ್ತ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಅಧಿಕೃತ ಸಂಸ್ಥೆಯೇ ನಿರ್ಧರಿಸುತ್ತದೆ.",
    },
  };

  const text = content[language] || content.English;

  const profile = {
    purpose: savedProfile.purpose || text.purposeValue,
    businessType:
      savedProfile.businessType || text.businessValue,
    amount: savedProfile.amount
      ? `₹${Number(savedProfile.amount).toLocaleString("en-IN")}`
      : "₹1,20,000",
    income: savedProfile.income || text.incomeValue,
    location: savedProfile.location || "Bengaluru",
  };

  const schemes = [
    {
      id: 1,
      name: "Entrepreneurship Support Scheme",
      amount: "₹1,50,000",
      interest: "Low interest",
      description: text.scheme1Description,
      reasons: [
        text.scheme1Reason1,
        text.scheme1Reason2,
        text.scheme1Reason3,
      ],
    },
    {
      id: 2,
      name: "Small Business Assistance Scheme",
      amount: "₹2,00,000",
      interest: "Subsidized",
      description: text.scheme2Description,
      reasons: [
        text.scheme2Reason1,
        text.scheme2Reason2,
        text.scheme2Reason3,
      ],
    },
    {
      id: 3,
      name: "Self Employment Finance Scheme",
      amount: "₹1,00,000",
      interest: "Concessional",
      description: text.scheme3Description,
      reasons: [
        text.scheme3Reason1,
        text.scheme3Reason2,
        text.scheme3Reason3,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
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

          {/* PAGE INTRO */}
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">

              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              {text.section}

            </div>


            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {text.title}
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-500">
              {text.subtitle}
            </p>

          </div>


          {/* USER REQUIREMENT */}
          <section className="mt-10">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {text.requirement}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {text.basedOn}
                </p>
              </div>

            </div>


            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* PURPOSE */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.purpose}
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {profile.purpose}
                </p>

              </div>


              {/* BUSINESS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.businessType}
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {profile.businessType}
                </p>

              </div>


              {/* AMOUNT */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.amount}
                </p>

                <p className="mt-2 text-lg font-extrabold text-slate-900">
                  {profile.amount}
                </p>

              </div>


              {/* LOCATION */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-xs font-semibold text-slate-400">
                  {text.location}
                </p>

                <p className="mt-2 text-sm font-bold text-slate-800">
                  {profile.location}
                </p>

              </div>

            </div>

          </section>


          {/* SCHEME COUNT */}
          <section className="mt-12">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.found}
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              {schemes.length} options to explore
            </h3>

          </section>


          {/* SCHEME CARDS */}
          <section className="mt-5 space-y-5">

            {schemes.map((scheme, index) => (

              <article
                key={scheme.id}
                className={`overflow-hidden rounded-[2rem] border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  index === 0
                    ? "border-blue-200"
                    : "border-slate-200"
                }`}
              >

                {/* TOP BAR */}
                {index === 0 && (
                  <div className="bg-blue-50 px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    Recommended option
                  </div>
                )}


                <div className="p-7 md:p-8">

                  <div className="grid gap-8 lg:grid-cols-[1fr_260px]">

                    {/* LEFT */}
                    <div>

                      <div className="flex flex-wrap gap-2">

                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                          {text.suitable}
                        </span>

                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                          {text.support}
                        </span>

                      </div>


                      <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                        {scheme.name}
                      </h3>


                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                        {scheme.description}
                      </p>


                      {/* WHY */}
                      <div className="mt-7">

                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                          {text.why}
                        </p>


                        <div className="mt-4 grid gap-3 sm:grid-cols-3">

                          {scheme.reasons.map((reason) => (

                            <div
                              key={reason}
                              className="rounded-xl bg-slate-50 p-4"
                            >

                              <div className="flex gap-3">

                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                                  ✓
                                </span>

                                <p className="text-sm font-semibold leading-5 text-slate-600">
                                  {reason}
                                </p>

                              </div>

                            </div>

                          ))}

                        </div>

                      </div>


                      <button
                        onClick={() => navigate("/scheme-details")}
                        className="mt-7 rounded-xl bg-[#061a3b] px-6 py-3.5 font-bold text-white shadow-lg hover:-translate-y-1 hover:bg-blue-900"
                      >
                        {text.viewDetails} →
                      </button>

                    </div>


                    {/* RIGHT INFORMATION */}
                    <div className="rounded-2xl bg-slate-50 p-6">

                      <div>

                        <p className="text-xs font-semibold text-slate-400">
                          {text.funding}
                        </p>

                        <p className="mt-2 text-2xl font-extrabold text-slate-900">
                          {scheme.amount}
                        </p>

                      </div>


                      <div className="my-6 h-px bg-slate-200" />


                      <div>

                        <p className="text-xs font-semibold text-slate-400">
                          {text.interest}
                        </p>

                        <p className="mt-2 text-sm font-extrabold text-slate-800">
                          {scheme.interest}
                        </p>

                      </div>


                      <div className="my-6 h-px bg-slate-200" />


                      <div>

                        <p className="text-xs font-semibold text-slate-400">
                          {text.eligibility}
                        </p>

                        <p className="mt-2 text-sm font-extrabold text-emerald-700">
                          {text.suitable}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </section>


          {/* NEXT STEP */}
          <section className="mt-12 rounded-[2rem] bg-[#061a3b] p-7 text-white shadow-xl md:p-9">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              {text.next}
            </p>


            <div className="mt-4 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <h3 className="text-2xl font-extrabold">
                  Continue with the scheme that interests you.
                </h3>


                <div className="mt-6 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-xl bg-white/5 p-4">
                    <span className="text-sm font-bold text-blue-200">
                      01
                    </span>

                    <p className="mt-2 text-sm text-blue-100/70">
                      {text.step1}
                    </p>
                  </div>


                  <div className="rounded-xl bg-white/5 p-4">
                    <span className="text-sm font-bold text-blue-200">
                      02
                    </span>

                    <p className="mt-2 text-sm text-blue-100/70">
                      {text.step2}
                    </p>
                  </div>


                  <div className="rounded-xl bg-white/5 p-4">
                    <span className="text-sm font-bold text-blue-200">
                      03
                    </span>

                    <p className="mt-2 text-sm text-blue-100/70">
                      {text.step3}
                    </p>
                  </div>

                </div>

              </div>


              <button
                onClick={() => navigate("/calculator")}
                className="rounded-xl bg-white px-6 py-3.5 font-bold text-[#061a3b] hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.calculator} →
              </button>

            </div>

          </section>


          {/* DISCLAIMER */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              <strong>Important:</strong> {text.disclaimer}
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Recommendations;