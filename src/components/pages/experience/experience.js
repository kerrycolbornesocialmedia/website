import React, {useState, useEffect} from 'react';
import Header from '../../header/header'
import styled from 'styled-components';
import headerImage from '../../../media/header.png'
import image from "./local_media/image.png"
import SideCard from '../../sideCard/sideCard';
import kerryPodium from '../../../media/kerryPodium.png';
import kerryJohnSawyer from '../../../media/KERRY-with-John-Sawyer-Edited.jpg'
 

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 0 auto;
  max-width: 1600px;
  @media (max-width: 768px) {
    padding-left: 5vw;
    padding-right: 5vw;
    flex-direction: column;
  }


`;
const MarinSpacer = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
  padding-left: 1vw;
  padding-right: 1vw;

`;
const Column = styled.div`
  flex: 3;

  box-sizing: border-box;
  margin-bottom: 7vh;
  
  @media (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    order: 1;
  }
    & > p {
      width: 80%;
    }

  & > iframe {
    width: 560px;
    height: 315px;
    @media (max-width: 768px) {
      width: 100%;
      height: 50vh;
    }

  }

    & > p {
    @media (max-width: 768px) {
    font-size: 12pt;
    }
  }
    & > h2 {
    @media (max-width: 768px) {
    font-size: 16pt;
    }
  }
    & > ul > li {
        @media (max-width: 768px) {
        font-size: 12pt;
    }
    }

    & > h3 {
     @media (max-width: 768px) {
        font-size: 12pt;
    }
    }

`;
const RightColumn = styled(Column)`
  flex: 1;
  
    @media (max-width: 768px) {
    width: 100%;
    order: 2;
    padding-left: 3vw;
    padding-right: 5vw;
    }

  & > img {
    width: 350px;
    height: auto;
    margin-top: 15vh;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 5vh;
    }

  }
`;
const Experience = (menu_state) => {


  return (
    <div style={{}}>
      <Header image={headerImage}
        isMenuOpen={menu_state} />
         <Container>
          <MarinSpacer />
        <Column style={{fontSize: "14pt"}}>
        <h1><b  style = {{color: "#2ebcf1", fontWeight: "bold", fontSize: "4vh"}}>Professionalism &</b> <b  style = {{color: "#152e52", fontWeight: "bolder", fontSize: "6vh"}}>Experience</b></h1>
        <br />
        <h2>Community Involvement</h2>
        <p>Kerry Colborne is a proud Canadian, a successful Oakville businesswoman and an experienced leader. She has 16 years’ experience as a senior executive, working internationally for Fortune 100 companies. Kerry moved to Oakville in 1992 and for the past 14 years has owned and operated her own small business here.</p>
        <p>Having lived in 3 provinces, she has a strong understanding of both eastern and western Canada, as well as an in depth knowledge of what is important to the residents of Oakville West and how best to represent us in Ottawa.</p>
        <ul>
          <li style = {{paddingTop: "1vh", color: "#152e52"}}>
            <b>Oakville Chamber of Commerce</b>
            <ul><li style={{color: "#1a1a1a"}}>Two terms as Chair of the Board, Director 10 years</li></ul>
          </li>
          <li style = {{paddingTop: "1vh", color: "#152e52"}}>
            <b>Oakville Awards for Business Excellence</b>
            <ul><li style={{color: "#1a1a1a"}}>Judge 12 years, Committee Chair 15 years</li></ul>
          </li>
          <li style = {{paddingTop: "1vh", color: "#152e52"}}>
            <b>Oakville Arts Council</b>
            <ul><li style={{color: "#1a1a1a"}}>Director and Treasurer 5 years</li></ul>
          </li>
          <li style = {{paddingTop: "1vh", color: "#152e52"}}>
            <b>Town of Oakville Heritage Advisory Committee</b>
            <ul><li style={{color: "#1a1a1a"}}>Member 9 years</li></ul>
          </li>
          <li style = {{paddingTop: "1vh", color: "#152e52"}}>
            <b>Big Brothers Big Sisters of Halton</b>
            <ul><li style={{color: "#1a1a1a"}}>Volunteer 4 years</li></ul>
          </li>
        </ul>
       <br />
        <p>Learn more about Kerry by listening to the Oakville Chamber of Commerce podcast with Kerry Colborne, Force 10 Capital Management Inc.</p>
        <iframe style = {{boxShadow: "1px 2px 9px gray"}}  src="https://www.buzzsprout.com/854653/3259894" frameborder="0" allowfullscreen></iframe>
        <br /> <br /> <br />
        <h2>Business Experience</h2>
        <h3 style = {{color: "#152e52"}}>Owner – Force 10 Capital Management Inc. </h3>
        <p style={{marginTop: "-2vh" }}>A mortgage brokerage specializing in private financing of residential and commercial real estate. First established in 2007 and accredited as a brokerage in 2016 <i>(Licence # 12799)</i>.</p>
        <h3 style = {{color: "#152e52"}}>Business Development Bank of Canada</h3>
        <p style={{marginTop: "-2vh" }}>Senior Account Manager.</p>
        <h3 style = {{color: "#152e52"}}>Merial New Zealand</h3>
        <p style={{marginTop: "-2vh" }}>General Manager (Country Manager) and managed a team of 41 people.</p>
        <h3 style = {{color: "#152e52"}}>Merial (France and then USA)</h3>
        <p style={{marginTop: "-2vh" }}>Global Marketing Director. Managed an existing portfolio of $225 million (US) and developed strategy for new therapeutic areas.</p>
        <h3 style = {{color: "#152e52"}}>Aventis (Rhone Poulenc and Hoechst merger)</h3>
        <p style={{marginTop: "-2vh" }}>Head of Marketing and managed a team of 13 with a marketing budget of $13 million and $250 million (CAD) in revenues.</p>
        <h3 style = {{color: "#152e52"}}>Rhone Poulenc Canada Inc.</h3>
        <p style={{marginTop: "-2vh" }}>Marketing Manager and managed a team of 3 with a marketing budget of $6.5 million and revenues of $50 million (CAD).</p>

      </Column>
      <RightColumn>

        <SideCard image = {kerryPodium} title = {"Kerry's"} subtitle = {"Vision"} blurb = {"\"I want to get Canada back on track economically, ensuring public safety, and work with all levels of government to get affordable housing built that is suitable for all ages and abilities. We need an environmental plan that is balanced and makes sense, a simplified and fair tax system, and improved policy on Canadian immigration.\""} />
        <iframe style = {{width: "100%", height: "30vh", boxShadow: "1px 2px 9px gray", borderRadius: "5px", marginBottom: "10vh"}} src="https://www.youtube-nocookie.com/embed/ZpXWeT7Wzzw?si=VS2AtNqtNfuH4U-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <SideCard image = {kerryJohnSawyer} title = {"Community"} subtitle = {"Support"} blurb = {`\"I have worked closely with Kerry for 15 years. She is smart, energetic and an experienced community leader. I know she would do an outstanding job representing Oakville in parliament.\" `} ending = "John Sawyer, President, Oakville Chamber of Commerce, 2005 – 2018" />
        <iframe style = {{width: "100%", height: "30vh", boxShadow: "1px 2px 9px gray", borderRadius: "5px", marginBottom: "10vh"}} src="https://www.youtube-nocookie.com/embed/gkJ1Jh9tuXU?si=XTzjOEAxs1-gakKJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
      </RightColumn>
      <MarinSpacer />
    </Container>
     <div style={{paddingBottom: "200px"}} />
      
    </div>
  );
};

export default Experience;
