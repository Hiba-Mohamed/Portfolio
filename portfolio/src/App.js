import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heading from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
