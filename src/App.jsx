import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/kangarookids" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
