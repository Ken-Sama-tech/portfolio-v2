import Navbar from "@components/Navbar";
import About from "@components/pages/About";
import Contact from "@components/pages/Contact";
import Home from "@components/pages/Home";
import Projects from "@components/pages/Projects";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="px-6 md:px-12 py-10">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default App;
