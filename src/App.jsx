import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
    {/* page components  */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
