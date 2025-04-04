import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';



const BasicDetails = lazy(() => import("./pages/BasicDetails"));
const RegionAvailability = lazy(() => import("./pages/RegionAvailability"));
const Experience = lazy(() => import("./pages/Experience"));
const ProfessionalExperience = lazy(() => import("./pages/ProfessionalExperience"));
const SkillsTraining = lazy(() => import("./pages/SkillsTraining"));

function App() {
  return (
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BasicDetails />} />
          <Route path="region-availability" element={<RegionAvailability />} />
          <Route path="experience" element={<Experience />} />
          <Route path="professional-experience" element={<ProfessionalExperience />} />
          <Route path="skills-training" element={<SkillsTraining />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
