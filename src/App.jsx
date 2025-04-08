import './App.css';
import Nav from './NavBar/Nav';
import Into from './Componants/Intro/Intro';
import About from './Componants/About/About';
import Projects from './Componants/Projects/Projects';
import Contact from './Componants/Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Componants/Skills/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';

function App() {
  const bgRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.0007;
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="parallax-bg" ref={bgRef}></div>
      <div className="main-content">
        <Nav />
        <div data-aos="fade-up" className="section"><Into /></div>
        <div data-aos="fade-up" className="section"><About /></div>
        <div data-aos="fade-up" className="section"><Skills /></div>
        <div data-aos="fade-up" className="section"><Projects /></div>
        <div data-aos="fade-up" className="section"><Contact /></div>
        <div data-aos="fade-up" className="section"><Footer /></div>
      </div>
    </div>
  );
}

export default App;
