import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContainer from "./components/page-container.js";
import Main from "./pages/main.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
import NavMain from "./components/nav-main.js";

function App() {
  return (
    <PageContainer>
      <Router>
        <NavMain />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </PageContainer>
  );
}

export default App;
