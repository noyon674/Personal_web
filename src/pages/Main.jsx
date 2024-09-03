import React from 'react';
import './main.scss';

import Intro from '../components/intro/Intro';
import Portfolios from '../components/portfolio/Portfolio';
import Experiences from '../components/experiences/Experiences';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import TopBar from '../components/topBar/TopBar';


function Main() {
  return (
    <div className="app">
      <TopBar />

      <div className="container">
        <Intro />
        <Portfolios />
        <Experiences />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default Main