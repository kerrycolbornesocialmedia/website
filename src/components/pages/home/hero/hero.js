// Hero.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px); /* Adjust height to account for navbar */
  overflow: hidden;
  margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '200px' : '60px')}; /* Adjust based on menu state */
  transition: margin-top 0.3s ease; /* Smooth transition */

  @media (max-width: 768px) {
    height: 100%;
    margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '200px' : '60px')};
  }

  @media (max-width: 480px) {
    height: 100%;
    margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '200px' : '60px')};
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;

  border-radius: 10px;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Hero Component
const Hero = ({ image, title, subtitle, isMenuOpen }) => {
  return (
    <HeroContainer isMenuOpen={isMenuOpen}>
      <HeroImage src={image} alt="Hero Image" />
      <HeroText>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
