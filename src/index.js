import React from 'react';
import ReactDOM from 'react-dom';

import './Template.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Calculator from './components/Calculator';
import Blog from './components/Blog';
import Footer from './components/Footer';

function Template() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Calculator />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

ReactDOM.render(
  <Template />,
  document.getElementById('app')
);