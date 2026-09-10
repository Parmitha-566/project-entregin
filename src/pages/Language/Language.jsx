import { useNavigate } from "react-router-dom";

function Language() {
  const navigate = useNavigate();

  const languages = [
    {
      native: "English",
      name: "English",
      description: "Continue in English",
    },
    {
      native: "हिन्दी",
      name: "Hindi",
      description: "हिंदी में आगे बढ़ें",
    },
    {
      native: "ಕನ್ನಡ",
      name: "Kannada",
      description: "ಕನ್ನಡದಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ",
    },
  ];

  const handleLanguageSelect = (language) => {
    localStorage.setItem("entreginLanguage", language);
    navigate("/onboarding");
  };

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
      <main className="flex min-h-[calc(100vh-76px)] items-center px-6 py-16">

        <div className="mx-auto w-full max-w-5xl">

          {/* HEADING */}
          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-800 shadow-sm">
              Aa
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Welcome to ENTREGIN
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Choose your language
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
              Select the language you're most comfortable with.
              <br className="hidden sm:block" />
              You can change this later.
            </p>

          </div>


          {/* LANGUAGE CARDS */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {languages.map((language) => (

              <button
                key={language.name}
                onClick={() => handleLanguageSelect(language.name)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >

                {/* TOP ACCENT */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-2xl font-extrabold text-slate-900">
                      {language.native}
                    </p>

                    <p className="mt-2 text-sm font-bold text-blue-700">
                      {language.name}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-lg text-slate-400 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                    →
                  </div>

                </div>

                <p className="mt-8 text-sm leading-6 text-slate-500">
                  {language.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 transition group-hover:text-blue-700">
                  Continue
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </button>

            ))}

          </div>


          {/* FOOTNOTE */}
          <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Your language preference helps us provide a simpler experience.
          </div>

        </div>

      </main>
    </div>
  );
}

export default Language;