import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AllWork from "./components/AllWork";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Routes>
        <Route path="/all-works" element={<AllWork />} />
        <Route
          path="/*"
          element={
            <>
              <Banner />
              <Nav />
              <About />
              <Services />
              <Work />
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
