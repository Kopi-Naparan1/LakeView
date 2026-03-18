import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Cafe from "./Pages/Cafe/Cafe";
import Resthouse from "./Pages/Resthouse/Resthouse";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-2rem)] bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/resthouse" element={<Resthouse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
