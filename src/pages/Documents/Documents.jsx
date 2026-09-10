import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Documents() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Aadhaar / Identity proof",
      done: false,
    },
    {
      id: 2,
      name: "Income certificate",
      done: false,
    },
    {
      id: 3,
      name: "Bank account details",
      done: false,
    },
    {
      id: 4,
      name: "Business / Project details",
      done: false,
    },
    {
      id: 5,
      name: "Recent photograph",
      done: false,
    },
  ]);

  const content = {
    English: {
      section: "Document readiness",
      title: "Get ready for your application.",
      subtitle:
        "Use this checklist to understand which documents you may need before applying.",
      checklist: "Document checklist",
      ready: "READY",
      pending: "PENDING",
      completed: "completed",
      complete: "complete",
      status: "Application readiness",
      finish: "Your ENTREGIN journey is complete.",
      finishText:
        "You now have a clearer view of suitable schemes, estimated finances and the documents you may need.",
      home: "Back to home",
      note:
        "Document requirements may vary depending on the scheme and authorized channel partner. Always verify the final list before applying.",
    },

    Hindi: {
      section: "दस्तावेज़ की तैयारी",
      title: "अपने आवेदन के लिए तैयार रहें।",
      subtitle:
        "आवेदन करने से पहले आवश्यक दस्तावेज़ों को समझने के लिए इस सूची का उपयोग करें।",
      checklist: "दस्तावेज़ सूची",
      ready: "तैयार",
      pending: "बाकी",
      completed: "पूर्ण",
      complete: "पूर्ण",
      status: "आवेदन की तैयारी",
      finish: "आपकी ENTREGIN यात्रा पूरी हो गई है।",
      finishText:
        "अब आपको उपयुक्त योजनाओं, अनुमानित वित्तीय जानकारी और आवश्यक दस्तावेज़ों की बेहतर समझ है।",
      home: "होम पर वापस जाएं",
      note:
        "दस्तावेज़ों की आवश्यकताएं योजना और अधिकृत चैनल पार्टनर के अनुसार अलग हो सकती हैं। आवेदन करने से पहले अंतिम सूची की पुष्टि करें।",
    },

    Kannada: {
      section: "ದಾಖಲೆಗಳ ಸಿದ್ಧತೆ",
      title: "ನಿಮ್ಮ ಅರ್ಜಿಗೆ ಸಿದ್ಧರಾಗಿ.",
      subtitle:
        "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಈ ಪಟ್ಟಿಯನ್ನು ಬಳಸಿ.",
      checklist: "ದಾಖಲೆಗಳ ಪಟ್ಟಿ",
      ready: "ಸಿದ್ಧ",
      pending: "ಬಾಕಿ",
      completed: "ಪೂರ್ಣ",
      complete: "ಪೂರ್ಣ",
      status: "ಅರ್ಜಿ ಸಿದ್ಧತೆ",
      finish: "ನಿಮ್ಮ ENTREGIN ಪ್ರಯಾಣ ಪೂರ್ಣಗೊಂಡಿದೆ.",
      finishText:
        "ಸೂಕ್ತ ಯೋಜನೆಗಳು, ಅಂದಾಜು ಹಣಕಾಸು ಮತ್ತು ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಈಗ ನಿಮಗೆ ಸ್ಪಷ್ಟವಾದ ಮಾಹಿತಿ ಇದೆ.",
      home: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
      note:
        "ದಾಖಲೆಗಳ ಅವಶ್ಯಕತೆಗಳು ಯೋಜನೆ ಮತ್ತು ಅಧಿಕೃತ ಚಾನೆಲ್ ಪಾಲುದಾರರ ಆಧಾರದ ಮೇಲೆ ಬದಲಾಗಬಹುದು. ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ಅಂತಿಮ ಪಟ್ಟಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    },
  };

  const text = content[language] || content.English;

  const toggleDocument = (id) => {
    setDocuments(
      documents.map((document) =>
        document.id === id
          ? { ...document, done: !document.done }
          : document
      )
    );
  };

  const completedCount = documents.filter(
    (document) => document.done
  ).length;

  const progress = Math.round(
    (completedCount / documents.length) * 100
  );

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


          {/* PROGRESS */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-700">
                  {text.status}
                </p>

                <p className="mt-2 text-2xl font-extrabold">
                  {progress}%
                </p>
              </div>

              <div className="text-right text-sm text-slate-400">
                {completedCount} / {documents.length} {text.completed}
              </div>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-[#0b2a5b] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />

            </div>

          </div>


          {/* DOCUMENT CHECKLIST */}
          <section className="mt-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.checklist}
            </p>

            <div className="mt-4 space-y-3">

              {documents.map((document) => (

                <button
                  key={document.id}
                  onClick={() => toggleDocument(document.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left shadow-sm hover:-translate-y-0.5 hover:shadow-md ${
                    document.done
                      ? "border-emerald-200 bg-emerald-50/60"
                      : "border-slate-200 bg-white hover:border-blue-200"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${
                        document.done
                          ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                          : "border-slate-200 bg-slate-50 text-slate-400"
                      }`}
                    >
                      {document.done ? "✓" : `0${document.id}`}
                    </div>

                    <div>
                      <p
                        className={`font-bold ${
                          document.done
                            ? "text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {document.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {document.done
                          ? text.ready
                          : text.pending}
                      </p>
                    </div>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-extrabold ${
                      document.done
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {document.done
                      ? text.ready
                      : text.pending}
                  </span>

                </button>

              ))}

            </div>

          </section>


          {/* COMPLETION */}
          <div className="mt-10 rounded-[2rem] bg-[#061a3b] p-7 text-white shadow-xl md:p-9">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-extrabold">
                  {text.finish}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100/65">
                  {text.finishText}
                </p>

              </div>

              <button
                onClick={() => navigate("/")}
                className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-[#061a3b] hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.home} →
              </button>

            </div>

          </div>


          {/* NOTE */}
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

export default Documents;