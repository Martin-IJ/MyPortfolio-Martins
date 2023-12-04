import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    //  className="bg-site bg-no-repeat bg-cover overflow-hidden"
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Nav />
    </div>
  );
};

export default App;
