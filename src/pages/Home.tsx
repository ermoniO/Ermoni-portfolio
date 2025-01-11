import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
