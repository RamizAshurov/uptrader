import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import ProjectsPage from "./pages/projects-page";
import SingleProjectPage from "./pages/single-project-page";
import SingleTaskPage from "./pages/single-task-page";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<SingleProjectPage />} />
            <Route path="/projects/:projectId/tasks/:taskId" element={<SingleTaskPage />} />
            <Route path="*" element={<Navigate to="/projects" />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
