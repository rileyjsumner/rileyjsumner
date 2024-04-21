import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Experience, Home, Projects, Skills } from "./views";
import { Layout } from "./layout";
import { ExperienceBySkill } from "./views/ExperienceBySkill";
import { Sleeper } from "./features";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Rosters,
  DownloadPlayerData,
  DraftPage,
  Playoffs,
} from "./features/sleeper/views";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="skills/:skill" element={<ExperienceBySkill />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="sleeper" element={<Sleeper />}>
              <Route path="rosters" element={<Rosters />} />
              <Route path="download" element={<DownloadPlayerData />} />
              <Route path="drafts" element={<DraftPage />} />
              <Route path="playoffs" element={<Playoffs />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
