import React, { useState, useEffect } from 'react';
import Slider from '../components/slider';
import Introduce from '../components/introduce';
import Benefits from '../components/benefits';
import Projects from '../components/projects';
import AboutUs from '../components/about_us';
import Team from '../components/team';
import Footer from '../components/footer';
function Home() {
  return (
    <div>
      <Slider/>
      <Introduce/>
      <Benefits/>
      <Projects/>
      <AboutUs/>
      <Team/>
      <Footer/>
    </div>
  );
  
}

export default Home;