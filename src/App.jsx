import './index.css'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Intro from './components/Intro';
import Services from './components/Services';
import Statement from './components/Statement';
import SelectedWork from './components/SelectedWork';
import Results from './components/Results';
import Team from './components/Team';
import Culture from './components/Culture';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
      <div className="c162 c013 c242 c209 c210">
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
    )
}

export default App
