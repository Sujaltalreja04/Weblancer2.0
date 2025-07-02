import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;