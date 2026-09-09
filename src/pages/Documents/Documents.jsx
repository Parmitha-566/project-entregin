import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Documents() {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState({
    aadhaar: false,
    income: false,
    bank: false,
    business: false,
    photo: false,
  });

  const toggleDocument = (document) => {
    setDocuments({
      ...documents,
      [document]: !documents[document],
    });
  };

  const completed = Object.values(documents).filter(Boolean).length;
  const total = Object.keys(documents).length;
  const percentage = Math.round((completed / total) * 100);

  const documentList = [
    {
      id: "aadhaar",
      title: "Aadhaar / Identity proof",
      description: "Valid identity document of the applicant.",
    },
    {
      id: "income",
      title: "Income certificate",
      description: "Proof of annual family income.",
    },
    {
      id: "bank",
      title: "Bank account details",
      description: "Active bank account information.",
    },
    {
      id: "business",
      title: "Business / Project details",
      description: "Basic details of your proposed activity.",
    },
    {
      id: "photo",
      title: "Recent photograph",
      description: "Recent passport-size photograph.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 font-bold text-white">
              E
            </div>

            <div>
              <h1 className="font-bold text-blue-950">
                ENTREGIN
              </h1>

              <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                Document Readiness
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/calculator")}
            className="text-sm font-medium text-slate-500 hover:text-blue-800"
          >
            ← Back
          </button>

        </div>
      </header>

      <main className="px-6 py-12">

        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Document readiness
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Are you ready to apply?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Use this checklist to keep track of the documents
              you may need during the application process.
            </p>

          </div>

          {/* Progress */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Your readiness
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {completed} of {total} documents ready
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-blue-800">
                  {percentage}%
                </p>
              </div>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-blue-700 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />

            </div>

          </div>

          {/* Checklist */}
          <div className="mt-6 space-y-4">

            {documentList.map((document) => {

              const isReady = documents[document.id];

              return (
                <button
                  key={document.id}
                  onClick={() => toggleDocument(document.id)}
                  className={`w-full rounded-3xl border p-6 text-left transition ${
                    isReady
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                  }`}
                >

                  <div className="flex items-center gap-5">

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold ${
                        isReady
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isReady ? "✓" : "○"}
                    </div>

                    <div className="flex-1">

                      <h3 className="font-bold text-slate-900">
                        {document.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {document.description}
                      </p>

                    </div>

                    <span
                      className={`hidden rounded-full px-4 py-2 text-xs font-bold sm:block ${
                        isReady
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isReady ? "READY" : "PENDING"}
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

          {/* Final section */}
          <div className="mt-8 rounded-3xl bg-blue-950 p-8 text-white shadow-xl">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                  You're almost there
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Your ENTREGIN journey is complete.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                  Review your information and approach an authorized
                  partner for the final application process.
                </p>

              </div>

              <button
                onClick={() => navigate("/")}
                className="shrink-0 rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Back to home
              </button>

            </div>

          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Document requirements may vary depending on the selected
            scheme and authorized implementing agency.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Documents;