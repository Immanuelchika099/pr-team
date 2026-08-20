import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Statement from "./components/Statement";
import SelectedWork from "./components/SelectedWork";
import Results from "./components/Results";
import Team from "./components/Team";
import Culture from "./components/Culture";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useCallback, useState } from "react";
import Preloader from "./components/Preloader";

function App() {

  const [loading, setLoading] = useState(true);

  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (

    <>
    
      {loading && (
        <Preloader onFinish={handleFinish} />
      )}

      <div className={loading ? "app site-hidden" : "app site-visible"}>
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <Intro />
          <Services />
          <Statement />
          <SelectedWork />
          <Results />
          <Team />
          <Culture />
          <Testimonial />
          <CTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;