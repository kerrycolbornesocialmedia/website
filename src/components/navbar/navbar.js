// Navbar.js
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PageContext from './page_context'

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #152e52;
  color: white;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000; /* Ensures navbar is on top of other elements */
`;

const Logo = styled.div`
  font-size: 24px;

  & > div {
    width: 220px;
    height: 80px;
    margin-left: 45px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 768px) {
    margin-left: 2vw;
    width: 50vw;
  }

  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
padding-right: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  margin: 0 25px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
    padding-right: 15vw;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
`;

const MobileLinks = styled.div`
  flex-direction: column;
  background-color: #152e52;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-bottom: 2vh;
`;

const MobileLink = styled.a`
  padding: 15px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #061e34;
  }
`;

const Navbar = ({LogoImage}) => {
  const {page, setPage} = useContext(PageContext);
  

  const setHome = () => {
    if(page.page != 0)
      setPage((prevData) => ({...prevData , page: 0}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const setEndorsements = () => {
    if(page.page != 1)
      setPage((prevData) => ({...prevData , page: 1}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const setExperience = () => {
    if(page.page != 2)
      setPage((prevData) => ({...prevData , page: 2}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const setCheckMembership = () => {
    if(page.page != 3)
      setPage((prevData) => ({...prevData , page: 3}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const setBecomeAMember = () => {
    if(page.page != 4)
      setPage((prevData) => ({...prevData , page: 4}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const setDonate = () => {
    if(page.page != 5)
      setPage((prevData) => ({...prevData , page: 5}))
    if(page.isMobile === 1)
      toggleMobileMenu()
    window.scrollTo(0, 0);
  }
  const toggleMobileMenu = () => {
    setPage((prevData) => ({...prevData, isMobile: (page.isMobile == 0) ? 1 : 0 }))
  }

  const hamburgerDisplay = (page.isMobile === 1) ? 'flex' : 'none'; 
  return (
    <NavbarContainer>
      <Logo><div style={{backgroundImage: `url(${LogoImage})`}}> </div></Logo>
      <LinksContainer>
        <Link href="#home" onClick={setHome}>Home</Link>
        <Link href="#experience" onClick={setExperience}>Experience</Link>
        <Link href="#endorsements" onClick={setEndorsements}>Endorsements</Link>
        <Link href="#becomeAMember" onClick={setBecomeAMember} >Become a Member</Link>
        <Link href="https://www.conservative.ca/membership-check/">Check Membership</Link>
        <Link href="https://buy.stripe.com/eVa6oY3DveUua0ocMM"   target="_blank" >Donate</Link>
        
      </LinksContainer>
      <HamburgerMenu onClick={toggleMobileMenu}>
        <Line />
        <Line />
        <Line />
      </HamburgerMenu>
      <MobileLinks style= {{display: hamburgerDisplay}} >
        <MobileLink href="#home" onClick={setHome}>Home</MobileLink>
        <MobileLink href="#experience" onClick={setExperience}>Experience</MobileLink>
        <MobileLink href="#endorsements" onClick={setEndorsements}>Endorsements</MobileLink>
        <MobileLink href="#becomeAMember" onClick={setBecomeAMember}>Become a Member</MobileLink>
        <MobileLink href="https://www.conservative.ca/membership-check/">Check Membership</MobileLink>
        <MobileLink href="https://buy.stripe.com/eVa6oY3DveUua0ocMM"   target="_blank" >Donate</MobileLink>
      </MobileLinks>
    </NavbarContainer>
  );
};

export default Navbar;
