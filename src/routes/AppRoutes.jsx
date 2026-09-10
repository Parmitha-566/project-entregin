import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Language from "../pages/Language/Language";
import Onboarding from "../pages/Onboarding/Onboarding";
import Questionnaire from "../pages/Questionnaire/Questionnaire";
import Recommendations from "../pages/Recommendations/Recommendations";
import SchemeDetails from "../pages/SchemeDetails/SchemeDetails";
import Partners from "../pages/Partners/Partners";
import Calculator from "../pages/Calculator/Calculator";
import Documents from "../pages/Documents/Documents";

function AppRoutes() {
  return (
    <Routes>
      {/* Main user flow */}
      <Route path="/" element={<Landing />} />

      <Route path="/language" element={<Language />} />

      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/questionnaire" element={<Questionnaire />} />

      <Route path="/recommendations" element={<Recommendations />} />

      <Route path="/scheme-details" element={<SchemeDetails />} />

      {/* Partner Matching */}
      <Route path="/partners" element={<Partners />} />

      <Route path="/calculator" element={<Calculator />} />

      <Route path="/documents" element={<Documents />} />
    </Routes>
  );
}

export default AppRoutes;