import React from 'react';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import Features from '../components/sections/Features';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default App;
