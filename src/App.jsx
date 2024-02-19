import React from 'react';
import Navbar from './util/NavBar';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import PastEvents from './components/PastEvents';
import About from './util/About';
import Council from './util/Council';
import MadeBy from './util/MadeBy';
import Guests from './util/Guests';
import FollowUs from './util/FollowUs';
import mainlogo from '../image/logo.png';
import bg1 from '../image/mainbg.png';
import { useState } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

const App = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleScroll =(component) => {
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div>
        <img className="bg -z-50" src={bg1} alt="" />
        <Navbar toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll}/>
        <hr className='border border-t-2' />
        <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center max-sm:justify-center">
          <img src={mainlogo} className="w-[80vw] max-w-[400px] h-auto mt-8 mb-4" alt="" />
          <p className="text-center px-4 md:px-48 text-lg md:text-3xl text-white">
            Get Ready To Ignite Your Senses! Alkemy Is Back, And This Year Is
            Going To Be A Transformative Experience. Step Into A Realm Where
            Creativity And Innovation Collide. Prepare To Be Amazed, Inspired,
            And Forever Changed 🚀
          </p>
          
        </div>
        <Events></Events>
        {/* <Guests></Guests>
        <Sponsors></Sponsors>
        <PastEvents></PastEvents>
        <MadeBy></MadeBy>
        <Council></Council> */}
        <About></About>
        <FollowUs></FollowUs>
      </div>
    </>
  );
};

export default App;
