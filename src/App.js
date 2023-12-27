import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import Main from "./pages/main.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";

function App() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
