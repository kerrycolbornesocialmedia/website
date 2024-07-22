import React from 'react';
import Hero from './hero/hero';
import heroImage from '../../../media/hero-image.png'; 
import About from './about/about'


const Home = ({menu_state}) => {
  return (
    <div>
      <div>
      <Hero
        image={heroImage}
        title=""
        subtitle=""
        isMenuOpen={menu_state}
      />
      <About style={{backgroundColor: "white"}}></About>
     <div style={{paddingBottom: "200px"}} />
      </div>
    </div>
  );
};

export default Home;
