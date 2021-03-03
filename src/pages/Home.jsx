import React from 'react';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
