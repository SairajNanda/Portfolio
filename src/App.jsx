import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Cocurricular from "./sections/Cocurricular";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Education />
      <Skills />
      <Cocurricular />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
