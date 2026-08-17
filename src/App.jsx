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
// import Home from './pages/Home.jsx'

function App() {

  return (
      <div className="min-h-screen bg-[#050A12] text-[#F5F5F5] selection:bg-[#E50914] selection:text-white">
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
