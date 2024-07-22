// header.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh; /* Adjust height to account for navbar */
  overflow: hidden;
  margin-top: 10vh;
  transition: margin-top 0.3s ease; /* Smooth transition */
  @media (max-width: 768px) {
    height: 10vh;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;




// header Component
const Header = ({ image, isMenuOpen }) => {
  return (
    <div>
    <HeaderContainer isMenuOpen={isMenuOpen} >
      <HeaderImage src={image} alt="header"  />
    </HeaderContainer>
    </div>
  );
};

export default Header;
