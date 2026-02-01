import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop"; // 👈 ADD THIS

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 MUST be here, above Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
