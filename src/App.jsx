import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experiance from "./sections/Experience";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experiance />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
