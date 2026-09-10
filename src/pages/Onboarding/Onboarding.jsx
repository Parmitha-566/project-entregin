import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  const language = localStorage.getItem("entreginLanguage") || "English";

  const content = {
    English: {
      badge: "LET'S GET STARTED",
      title: "Let's understand",
      titleAccent: "what you need.",
      description:
        "Answer a few simple questions about your needs. ENTREGIN will use your information to identify government schemes that may be suitable for you.",
      button: "Start questionnaire",
      trust: ["Simple questions", "Guided process", "No complicated searches"],
      journey: "YOUR JOURNEY",
      journeyTitle: "A clear path forward",
      steps: [
        "Tell us about yourself",
        "Describe your requirement",
        "Check suitable schemes",
        "Plan your finances",
        "Find the right partner",
      ],
      starting: "Starting here",
      simple: "Simple and guided",
      simpleText:
        "We'll guide you through each step so you can understand your options clearly.",
    },

    Hindi: {
      badge: "शुरू करते हैं",
      title: "आइए समझते हैं",
      titleAccent: "आपको क्या चाहिए।",
      description:
        "अपनी जरूरतों के बारे में कुछ आसान सवालों के जवाब दें। ENTREGIN आपकी जानकारी के आधार पर आपके लिए उपयुक्त सरकारी योजनाओं की पहचान करने में मदद करेगा।",
      button: "प्रश्नावली शुरू करें",
      trust: ["आसान सवाल", "मार्गदर्शित प्रक्रिया", "कोई जटिल खोज नहीं"],
      journey: "आपकी यात्रा",
      journeyTitle: "आगे बढ़ने का आसान रास्ता",
      steps: [
        "अपने बारे में बताएं",
        "अपनी जरूरत बताएं",
        "उपयुक्त योजनाएं देखें",
        "अपनी वित्तीय योजना बनाएं",
        "सही साझेदार खोजें",
      ],
      starting: "यहां से शुरू करें",
      simple: "आसान और मार्गदर्शित",
      simpleText:
        "हम हर चरण में आपका मार्गदर्शन करेंगे ताकि आप अपने विकल्पों को आसानी से समझ सकें।",
    },

    Kannada: {
      badge: "ಪ್ರಾರಂಭಿಸೋಣ",
      title: "ನಿಮಗೆ ಬೇಕಾದುದನ್ನು",
      titleAccent: "ಅರ್ಥಮಾಡಿಕೊಳ್ಳೋಣ.",
      description:
        "ನಿಮ್ಮ ಅಗತ್ಯಗಳ ಕುರಿತು ಕೆಲವು ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ. ನಿಮ್ಮ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಸೂಕ್ತ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಗುರುತಿಸಲು ENTREGIN ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      button: "ಪ್ರಶ್ನಾವಳಿ ಪ್ರಾರಂಭಿಸಿ",
      trust: ["ಸರಳ ಪ್ರಶ್ನೆಗಳು", "ಮಾರ್ಗದರ್ಶಿತ ಪ್ರಕ್ರಿಯೆ", "ಸಂಕೀರ್ಣ ಹುಡುಕಾಟವಿಲ್ಲ"],
      journey: "ನಿಮ್ಮ ಪ್ರಯಾಣ",
      journeyTitle: "ಮುಂದೆ ಸಾಗಲು ಸರಳ ಮಾರ್ಗ",
      steps: [
        "ನಿಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಸಿ",
        "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ತಿಳಿಸಿ",
        "ಸೂಕ್ತ ಯೋಜನೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
        "ನಿಮ್ಮ ಹಣಕಾಸು ಯೋಜಿಸಿ",
        "ಸರಿಯಾದ ಪಾಲುದಾರರನ್ನು ಹುಡುಕಿ",
      ],
      starting: "ಇಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಿ",
      simple: "ಸರಳ ಮತ್ತು ಮಾರ್ಗದರ್ಶಿತ",
      simpleText:
        "ನಿಮ್ಮ ಆಯ್ಕೆಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಾವು ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತೇವೆ.",
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

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Empowering Possibilities
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="flex min-h-[calc(100vh-76px)] items-center px-6 py-14">

        <div className="mx-auto w-full max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {text.badge}
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                {text.title}

                <span className="block text-[#0b2a5b]">
                  {text.titleAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                {text.description}
              </p>

              <button
                onClick={() => navigate("/questionnaire")}
                className="group mt-8 rounded-xl bg-[#0b2a5b] px-7 py-4 font-bold text-white shadow-lg shadow-blue-950/15 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                {text.button}

                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {text.trust.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100/40 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl md:p-8">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-blue-700">
                      {text.journey}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      {text.journeyTitle}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">
                    01
                  </div>

                </div>

                <div className="relative mt-8">

                  <div className="absolute left-[21px] top-5 h-[calc(100%-40px)] w-px bg-slate-200" />

                  <div className="space-y-5">

                    {text.steps.map((title, index) => (
                      <div
                        key={title}
                        className="relative flex items-center gap-4"
                      >

                        <div
                          className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-bold text-sm ${
                            index === 0
                              ? "border-blue-200 bg-blue-50 text-blue-800"
                              : "border-slate-200 bg-white text-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </div>

                        <div>
                          <p
                            className={`font-semibold ${
                              index === 0
                                ? "text-slate-900"
                                : "text-slate-600"
                            }`}
                          >
                            {title}
                          </p>

                          {index === 0 && (
                            <p className="mt-1 text-xs text-blue-600">
                              {text.starting}
                            </p>
                          )}
                        </div>

                      </div>
                    ))}

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">

                  <div className="flex items-start gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm text-emerald-600">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {text.simple}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {text.simpleText}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Onboarding;