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
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-lg font-bold text-white">
              E
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-blue-950">
                ENTREGIN
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Empowering Possibilities
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-bold text-blue-800">
              Aa
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Welcome to ENTREGIN
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Choose your language
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Select a language you're comfortable with.
              You can change this later.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {languages.map((language) => (
              <button
                key={language.name}
                onClick={() => handleLanguageSelect(language.name)}
                className="group rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">
                      {language.native}
                    </p>

                    <p className="mt-2 text-sm font-medium text-blue-700">
                      {language.name}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                    →
                  </div>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                  {language.description}
                </p>
              </button>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Your language preference helps us provide a simpler experience.
          </p>

        </div>
      </main>

    </div>
  );
}

export default Language;