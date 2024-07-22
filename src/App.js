// App.js
import React, { useState, useContext } from 'react';
import Navbar from './components/navbar/navbar';
import logoImage from './media/lgoo_horizontal_white.png'
import Pages from './components/pages/pages'
import PageContext from './components/navbar/page_context'
import mapleLeafBackground from './media/leaf_background.png'
import Footer from './components/footer/footer'
import styled from 'styled-components';

const Global = styled.div`
& > p, h1, h2, h3 {
  color: #1d1717;
}

`

const App = () => {
  const [page, setPage] = useState({
    page: 0,
    isMobile: 0
  })
  
  if(page === undefined){
    console.log("Initial load")
    setPage(0)
  }


  return (
    <Global style={{backgroundImage: `url(${mapleLeafBackground})` }}>
      <PageContext.Provider value={{page, setPage}}>
      <Navbar LogoImage = {logoImage} />
      <Pages/>
      <Footer />
      </PageContext.Provider>
    </Global>
  );
};

export default App;
