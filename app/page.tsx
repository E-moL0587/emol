'use client';

import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const PortfolioSite = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioSite;
