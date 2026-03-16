import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Gallery from "./Pages/Gallery/Gallery";
import Reservation from "./Pages/Reservation/Reservation";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-2rem)] bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
