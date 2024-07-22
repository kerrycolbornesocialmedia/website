import React from 'react';
import styled from 'styled-components';
import businessExperience from './local_media/business-experience.jpg'
import kerrySidebar from './local_media/Kerry-sidebar.jpg'
import kerryChamberBoard from './local_media/Kerry-with-Chamber-Board.jpg'
import signInstall from './local_media/Sign-Install.jpg'
import kerryFFL from './local_media/kerry_food_for_life.jpg'
import canadaDayA from './local_media/canada_day_a.jpg'
import indianFestivalA from './local_media/indian_festival_a.jpg'
import PhotoGridA from '../../../photoGridA/photoGridA';
import Photo from '../../../photoGridA/photo';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1600px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 3;
  padding-right: "7vw"; 
  fontSize: "14pt";
  paddingLeft: "3vw";
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    order: 1;

  }

  & > img {
    box-shadow: 1px 2px 9px gray;
    width: 70%;
    padding-left: 0;
    border-radius: 5px;
    border: 0.4em solid white;
    
    
    @media (max-width: 768px) {   
      width: 100%;

  }
  }

    & > img {
    box-shadow: 1px 2px 9px gray;
    width: 70%;
    padding-left: 0;
    border-radius: 5px;
    
    
    @media (max-width: 768px) {
      width: 100%;

  }
  }
`;

const QuoteCard = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.5em 1.5em;
  box-shadow: 1px 2px 9px gray;
  width: 70%;
  
  @media (max-width: 768px) {
    width: 80%;
  }

  &:hover {
    transform: scale(1.025);
  }

  & > p {
    font-style: italic;
    color: #333333;
  }
`;


const Img = styled.img`

  `;

const RightColumn = styled(Column)`
  flex: 1;
  padding-left: 2vw;
  padding-right: 2vw;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    padding-left: 10vw;
    padding-right: 10vw;
    }

  & > iframe {
    width: 450px;
    height: 100%;
    margin: 0px 0px;
    margin-top: 15vh;
    frame-border: 0px;
    margin-height: 0px;
    margin-width: 0px;
    border: 0px solid white;
    
    @media (max-width: 768px) {
      width: 100%;
      margin: 0px 0px;
      padding: 0px 0px;
      height: 150vh;
    
    }

  }
  
`;

const About = () => {
  return (
    <div style={{}}>
    <Container style={{}}>
      <Column style={{marginRight: "12vw"}}>
        <h1><b  style = {{color: "#2ebcf1", fontWeight: "bold", fontSize: "4vh"}}>About&nbsp;</b> <b  style = {{color: "#152e52", fontWeight: "bolder", fontSize: "6vh"}}> Kerry</b></h1>
        <p>
        Kerry Colborne is a proud Canadian, a remarkably successful Oakville businesswoman and an experienced leader.  She is respectfully asking for your support by voting for her to be the Conservative Party candidate for <b>Oakville West</b> in the next federal election.
        </p>
        <br />

        <img src = {kerryChamberBoard} />

        <br /> <br />
        <p>
        She ran a very successful federal election campaign in 2021 garnering the best results for the Conservative Party in the western GTA, increasing the popular vote against a high profile Cabinet Minister despite only being nominated 7 days before the election.
     </p><br />
        <img src = {signInstall}/>
        <br /> <br />
        <p>
          A sample of the comments received by Oakville voters after Election Day 2021: 
        </p>
        <br />
        <QuoteCard>
        <p> 
            Hi Kerry, I wanted to thank you for working hard and running a great campaign. You are the best candidate we have had in a long time, and I hope you and your team stay involved. 
        </p>
        <p>– NM</p>
      </QuoteCard>
      <br />
      <QuoteCard>
      <p>
        A short note to congratulate you on your run as our conservative candidate for Oakville. You worked so tirelessly and with such enthusiasm and dedication to running a clean campaign. We sincerely thank you. It is our hope that you will continue to represent us in the future. 
        </p><p>Very best wishes.  
      </p>

      <p>– IK</p>  
      </QuoteCard>

<p> <br />

Kerry has been working hard in Oakville West since the night of the last federal election, meeting constituents, developing relationships with key community leaders and supporting local initiatives and events.
        </p>
        <br />
        
        <PhotoGridA photoA = {canadaDayA} titleA = {"Canada Day 2024"} photoB = {indianFestivalA} titleB = {"Rathayatra Festival of India"} photoC = {kerryFFL} titleC = {"Rib Fest 2024"}/>

        <br /> <br />
      </Column>
      <RightColumn style={{}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKd9ssh8KNRvzLtiSXwbTbuA7aC2hXFWwAKQU9vJd49bZCEQ/viewform?embedded=true"  >Loading…</iframe>
      
      </RightColumn>
    </Container>
    </div>
  );
};

export default About;
