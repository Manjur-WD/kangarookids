import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/Aboutpage/About";
import Academics from "./pages/Academics/Academics";
import Curriculum from "./pages/Curriculum/Curriculum";
import PrincipalSpeak from "./pages/Principal'sSpeak/PrincipalSpeak";
import Contact from "./pages/ContactPage/Contact";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/kangarookids" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/principals-speak" element={<PrincipalSpeak />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
