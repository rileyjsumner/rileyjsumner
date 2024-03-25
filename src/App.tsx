import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Experience, Home, Projects, Skills } from "./views";
import { Layout } from "./layout";
import { ExperienceBySkill } from "./views/ExperienceBySkill";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="skills/:skill" element={<ExperienceBySkill />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
