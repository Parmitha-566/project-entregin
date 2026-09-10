import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function Partners() {
  const navigate = useNavigate();

  const language =
    localStorage.getItem("entreginLanguage") || "English";

  const content = {
    English: {
      section: "Partner matching",
      title: "Find the right channel partner.",
      subtitle:
        "Partners are ranked using scheme compatibility, location, availability and processing capacity.",
      recommended: "Recommended partner",
      suitability: "Suitability",
      schemeMatch: "Scheme compatibility",
      distance: "Distance",
      capacity: "Processing capacity",
      availability: "Availability",
      available: "Available",
      moderate: "Moderate",
      high: "High",
      bank: "Public Sector Bank",
      branch: "Main Branch",
      km: "km away",
      proceed: "Proceed with this partner",
      other: "Other suitable partners",
      map: "Partner locations",
      mapText:
        "Nearby partner locations based on your selected scheme and location.",
      calculator: "Calculate EMI",
      back: "Back to scheme",
      note:
        "Partner recommendations are for demonstration. Final availability and authorization should be verified with the respective institution.",
      scoring: "How the score is calculated",
      scoringText:
        "The suitability score combines four transparent factors.",
      compatibilityWeight: "Scheme compatibility",
      distanceWeight: "Distance",
      availabilityWeight: "Availability",
      capacityWeight: "Processing capacity",
    },

    Hindi: {
      section: "पार्टनर मिलान",
      title: "सही चैनल पार्टनर खोजें।",
      subtitle:
        "पार्टनरों की रैंकिंग योजना की अनुकूलता, स्थान, उपलब्धता और प्रक्रिया क्षमता के आधार पर की जाती है।",
      recommended: "अनुशंसित पार्टनर",
      suitability: "उपयुक्तता",
      schemeMatch: "योजना अनुकूलता",
      distance: "दूरी",
      capacity: "प्रक्रिया क्षमता",
      availability: "उपलब्धता",
      available: "उपलब्ध",
      moderate: "मध्यम",
      high: "उच्च",
      bank: "सार्वजनिक क्षेत्र का बैंक",
      branch: "मुख्य शाखा",
      km: "किमी दूर",
      proceed: "इस पार्टनर के साथ आगे बढ़ें",
      other: "अन्य उपयुक्त पार्टनर",
      map: "पार्टनर स्थान",
      mapText:
        "आपकी चुनी हुई योजना और स्थान के आधार पर आसपास के पार्टनर स्थान।",
      calculator: "EMI की गणना करें",
      back: "योजना पर वापस",
      note:
        "पार्टनर सुझाव केवल प्रदर्शन के लिए हैं। अंतिम उपलब्धता और प्राधिकरण संबंधित संस्था से सत्यापित करें।",
      scoring: "स्कोर की गणना कैसे होती है",
      scoringText:
        "उपयुक्तता स्कोर चार पारदर्शी कारकों को मिलाकर बनाया जाता है।",
      compatibilityWeight: "योजना अनुकूलता",
      distanceWeight: "दूरी",
      availabilityWeight: "उपलब्धता",
      capacityWeight: "प्रक्रिया क्षमता",
    },

    Kannada: {
      section: "ಪಾಲುದಾರ ಹೊಂದಾಣಿಕೆ",
      title: "ಸರಿಯಾದ ಚಾನೆಲ್ ಪಾಲುದಾರರನ್ನು ಹುಡುಕಿ.",
      subtitle:
        "ಯೋಜನೆಯ ಹೊಂದಾಣಿಕೆ, ಸ್ಥಳ, ಲಭ್ಯತೆ ಮತ್ತು ಪ್ರಕ್ರಿಯೆ ಸಾಮರ್ಥ್ಯದ ಆಧಾರದ ಮೇಲೆ ಪಾಲುದಾರರನ್ನು ಶ್ರೇಣೀಕರಿಸಲಾಗುತ್ತದೆ.",
      recommended: "ಶಿಫಾರಸು ಮಾಡಿದ ಪಾಲುದಾರ",
      suitability: "ಸೂಕ್ತತೆ",
      schemeMatch: "ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ",
      distance: "ದೂರ",
      capacity: "ಪ್ರಕ್ರಿಯೆ ಸಾಮರ್ಥ್ಯ",
      availability: "ಲಭ್ಯತೆ",
      available: "ಲಭ್ಯವಿದೆ",
      moderate: "ಮಧ್ಯಮ",
      high: "ಹೆಚ್ಚು",
      bank: "ಸಾರ್ವಜನಿಕ ವಲಯದ ಬ್ಯಾಂಕ್",
      branch: "ಮುಖ್ಯ ಶಾಖೆ",
      km: "ಕಿ.ಮೀ ದೂರ",
      proceed: "ಈ ಪಾಲುದಾರರೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      other: "ಇತರ ಸೂಕ್ತ ಪಾಲುದಾರರು",
      map: "ಪಾಲುದಾರರ ಸ್ಥಳಗಳು",
      mapText:
        "ನಿಮ್ಮ ಆಯ್ಕೆ ಮಾಡಿದ ಯೋಜನೆ ಮತ್ತು ಸ್ಥಳದ ಆಧಾರದ ಮೇಲೆ ಹತ್ತಿರದ ಪಾಲುದಾರ ಸ್ಥಳಗಳು.",
      calculator: "EMI ಲೆಕ್ಕ ಹಾಕಿ",
      back: "ಯೋಜನೆಗೆ ಹಿಂತಿರುಗಿ",
      note:
        "ಪಾಲುದಾರರ ಶಿಫಾರಸುಗಳು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಅಂತಿಮ ಲಭ್ಯತೆ ಮತ್ತು ಅಧಿಕೃತತೆಯನ್ನು ಸಂಬಂಧಿತ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
      scoring: "ಸ್ಕೋರ್ ಅನ್ನು ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ",
      scoringText:
        "ಸೂಕ್ತತೆ ಸ್ಕೋರ್ ನಾಲ್ಕು ಪಾರದರ್ಶಕ ಅಂಶಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",
      compatibilityWeight: "ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ",
      distanceWeight: "ದೂರ",
      availabilityWeight: "ಲಭ್ಯತೆ",
      capacityWeight: "ಪ್ರಕ್ರಿಯೆ ಸಾಮರ್ಥ್ಯ",
    },
  };

  const text = content[language] || content.English;

  /*
   * MOCK PARTNER DATA
   *
   * In the final backend version, these values should come from
   * the Partner Intelligence Engine/API.
   */
  const partners = [
    {
      id: 1,
      name: "Canara Bank",
      type: text.bank,
      branch: text.branch,
      distance: 2.4,
      compatibility: 96,
      availabilityScore: 100,
      capacityScore: 100,
      capacity: text.high,
      availability: text.available,
      position: [13.0067, 77.5703],
    },
    {
      id: 2,
      name: "State Bank Partner",
      type: text.bank,
      branch: text.branch,
      distance: 4.1,
      compatibility: 91,
      availabilityScore: 100,
      capacityScore: 70,
      capacity: text.moderate,
      availability: text.available,
      position: [13.0176, 77.5946],
    },
    {
      id: 3,
      name: "Regional Rural Bank",
      type: "Regional Rural Bank",
      branch: text.branch,
      distance: 5.8,
      compatibility: 88,
      availabilityScore: 100,
      capacityScore: 70,
      capacity: text.moderate,
      availability: text.available,
      position: [12.9719, 77.6412],
    },
  ];

  /*
   * EXPLAINABLE PARTNER SCORING
   *
   * Scheme compatibility = 40%
   * Distance             = 25%
   * Availability         = 20%
   * Processing capacity  = 15%
   */

  const calculateDistanceScore = (distance) => {
    return Math.max(0, Math.round(100 - distance * 5));
  };

  const calculateSuitability = (partner) => {
    const distanceScore = calculateDistanceScore(partner.distance);

    const score =
      partner.compatibility * 0.4 +
      distanceScore * 0.25 +
      partner.availabilityScore * 0.2 +
      partner.capacityScore * 0.15;

    return Math.round(score);
  };

  const rankedPartners = partners
    .map((partner) => ({
      ...partner,
      distanceScore: calculateDistanceScore(partner.distance),
      suitability: calculateSuitability(partner),
    }))
    .sort((a, b) => b.suitability - a.suitability);

  const recommendedPartner = rankedPartners[0];

  const userLocation = [12.9716, 77.5946];

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


          {/* RECOMMENDED PARTNER */}
          <section className="mt-10">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.recommended}
            </p>

            <div className="mt-4 overflow-hidden rounded-[2rem] bg-[#061a3b] text-white shadow-xl">

              <div className="grid lg:grid-cols-[1fr_280px]">

                <div className="p-7 md:p-9">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
                      {recommendedPartner.suitability}% {text.suitability}
                    </span>

                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                      {recommendedPartner.type}
                    </span>

                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold">
                    {recommendedPartner.name}
                  </h3>

                  <p className="mt-2 text-blue-100/60">
                    {recommendedPartner.branch}
                  </p>


                  <div className="mt-8 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs text-blue-100/50">
                        {text.schemeMatch}
                      </p>

                      <p className="mt-2 text-xl font-extrabold">
                        {recommendedPartner.compatibility}%
                      </p>
                    </div>


                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs text-blue-100/50">
                        {text.distance}
                      </p>

                      <p className="mt-2 text-xl font-extrabold">
                        {recommendedPartner.distance} {text.km}
                      </p>
                    </div>


                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs text-blue-100/50">
                        {text.capacity}
                      </p>

                      <p className="mt-2 text-xl font-extrabold">
                        {recommendedPartner.capacity}
                      </p>
                    </div>

                  </div>


                  <button
                    onClick={() => navigate("/calculator")}
                    className="mt-8 rounded-xl bg-white px-6 py-3.5 font-bold text-[#061a3b] hover:-translate-y-1 hover:bg-blue-50"
                  >
                    {text.proceed} →
                  </button>

                </div>


                {/* SCORE */}
                <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">

                  <div className="text-center">

                    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-emerald-400/20">

                      <div>

                        <p className="text-4xl font-extrabold">
                          {recommendedPartner.suitability}%
                        </p>

                        <p className="mt-1 text-xs text-blue-100/50">
                          {text.suitability}
                        </p>

                      </div>

                    </div>

                    <p className="mt-5 text-sm font-semibold text-emerald-300">
                      ● {recommendedPartner.availability}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* SCORING EXPLANATION */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.scoring}
            </p>

            <h3 className="mt-3 text-2xl font-extrabold">
              Transparent partner ranking
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {text.scoringText}
            </p>


            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-2xl font-extrabold text-blue-800">
                  40%
                </p>

                <p className="mt-2 text-sm font-bold">
                  {text.compatibilityWeight}
                </p>
              </div>


              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-2xl font-extrabold text-slate-800">
                  25%
                </p>

                <p className="mt-2 text-sm font-bold">
                  {text.distanceWeight}
                </p>
              </div>


              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-2xl font-extrabold text-slate-800">
                  20%
                </p>

                <p className="mt-2 text-sm font-bold">
                  {text.availabilityWeight}
                </p>
              </div>


              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-2xl font-extrabold text-slate-800">
                  15%
                </p>

                <p className="mt-2 text-sm font-bold">
                  {text.capacityWeight}
                </p>
              </div>

            </div>

          </section>


          {/* MAP */}
          <section className="mt-10">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.map}
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Nearby partner network
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {text.mapText}
            </p>


            <div className="mt-5 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

              <MapContainer
                center={userLocation}
                zoom={12}
                scrollWheelZoom={true}
                className="h-[420px] w-full"
              >

                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* USER LOCATION */}
                <Marker position={userLocation}>

                  <Popup>
                    <strong>Your location</strong>
                    <br />
                    Bengaluru
                  </Popup>

                </Marker>


                {/* PARTNER LOCATIONS */}
                {rankedPartners.map((partner) => (

                  <Marker
                    key={partner.id}
                    position={partner.position}
                  >

                    <Popup>

                      <div className="min-w-[190px]">

                        <p className="text-base font-bold">
                          {partner.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {partner.type}
                        </p>

                        <div className="mt-3 space-y-1 text-xs">

                          <p>
                            <strong>{text.suitability}:</strong>{" "}
                            {partner.suitability}%
                          </p>

                          <p>
                            <strong>{text.schemeMatch}:</strong>{" "}
                            {partner.compatibility}%
                          </p>

                          <p>
                            <strong>{text.distance}:</strong>{" "}
                            {partner.distance} {text.km}
                          </p>

                          <p>
                            <strong>{text.availability}:</strong>{" "}
                            {partner.availability}
                          </p>

                        </div>

                      </div>

                    </Popup>

                  </Marker>

                ))}

              </MapContainer>

            </div>

          </section>


          {/* RANKED PARTNERS */}
          <section className="mt-10">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {text.other}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">

              {rankedPartners.slice(1).map((partner) => (

                <div
                  key={partner.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h4 className="text-lg font-extrabold">
                        {partner.name}
                      </h4>

                      <p className="mt-1 text-sm text-slate-400">
                        {partner.type}
                      </p>

                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {partner.suitability}%
                    </span>

                  </div>


                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        {text.distance}
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {partner.distance} {text.km}
                      </p>

                    </div>


                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        {text.availability}
                      </p>

                      <p className="mt-1 text-sm font-bold text-emerald-700">
                        {partner.availability}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* NEXT STEP */}
          <section className="mt-10 rounded-3xl bg-[#061a3b] p-7 text-white shadow-xl md:p-9">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Next step
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Plan your potential repayment.
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100/65">
                  Check your estimated EMI before continuing.
                </p>

              </div>

              <button
                onClick={() => navigate("/calculator")}
                className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-[#061a3b] hover:-translate-y-1 hover:bg-blue-50"
              >
                {text.calculator} →
              </button>

            </div>

          </section>


          {/* DISCLAIMER */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              <strong>Note:</strong> {text.note}
            </p>

          </div>


          {/* BACK */}
          <button
            onClick={() => navigate("/scheme-details")}
            className="mt-6 text-sm font-bold text-slate-500 hover:text-blue-700"
          >
            ← {text.back}
          </button>

        </div>

      </main>

    </div>
  );
}

export default Partners;