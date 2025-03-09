import "./app.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProjectPage from "./pages/ProjectPage";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
