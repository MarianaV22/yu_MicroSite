import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Circles from './components/Circles';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import About from './sections/About';
import Concept from './sections/Concept';
import Features from './sections/Features';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

const sections = ['hero','problem','about','concept','features','cta'];
export default function App() {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-body text-gray-800 relative overflow-x-hidden">
      <NavBar active={active} />
      <Circles active={active} />
      <main>
        <Hero />
        <Problem />
        <About />
        <Concept />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
