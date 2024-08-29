import React, { lazy, Suspense } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "./components/common/Preloader";

// Lazy load components
const Home = lazy(() => import("./pages/Homepage/Home"));
const About = lazy(() => import("./pages/Aboutpage/About"));
const Academics = lazy(() => import("./pages/Academics/Academics"));
const Curriculum = lazy(() => import("./pages/Curriculum/Curriculum"));
const PrincipalSpeak = lazy(() => import("./pages/Principal'sSpeak/PrincipalSpeak"));
const Contact = lazy(() => import("./pages/ContactPage/Contact"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Events = lazy(() => import("./pages/EventsPage/Events"));

const App = () => {
  return (
    <BrowserRouter basename="/kangarookids">
      <Header />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/principals-speak" element={<PrincipalSpeak />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
