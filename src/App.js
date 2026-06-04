import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Highlights from './components/Highlights';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import Reserve from './components/Reserve';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Highlights />
      <Amenities />
      <Reviews />
      <Reserve />
      <Footer />
    </>
  );
}

export default App;
