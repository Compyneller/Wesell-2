import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import FooterStrip from "./components/FooterStrip";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Term from "./pages/Term";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/warranty" element={<WarrantyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/tc" element={<Term />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
        <FooterStrip />
      </BrowserRouter>
    </div>
  );
}

export default App;
