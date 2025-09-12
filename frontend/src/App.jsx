// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Community from "./pages/Community";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
