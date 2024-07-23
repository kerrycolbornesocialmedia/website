import React, {useState, useEffect} from 'react';
import Header from '../../header/header'
import styled from 'styled-components';
import headerImage from '../../../media/header.png'
import EndorsementCard from './endorsement_card/endorsement_card';
import rayChisholm from "./local_media/RayChisholm.png"
import johnSawyer from "./local_media/JohnSawyer.jpg"
import cathyDuddeck from './local_media/CathyDuddeck.jpg'
import danLawrie from './local_media/DanLawrie.png'
import jeffKnoll from './local_media/JeffKnoll.png'
import laurenceHenderson from './local_media/LaurenceHenderson.png'
import lindaLeatherdale from './local_media/LindaLeatherdale.png'
import lisaRaitt from './local_media/LisaRaitt.jpg'
import maryCardamone from './local_media/MaryCardamone.png'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10vh;
  margin: 0 auto;
  max-width: 1600px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 2vh;
  }
`;

const Column = styled.div`
  flex: 3;

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    order: 1;
  }
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
    
    @media (max-width: 768px) {
      width: 100%;
      margin: 0px 0px;
      padding: 0px 0px;
      height: 150vh;
    
    }

  }
`;
const Endorsements = (menu_state) => {



  return (
    <div style={{}}>
      <Header image={headerImage}
        isMenuOpen={menu_state} />
         <Container>
        <Column style={{paddingRight: "7vw", fontSize: "14pt", paddingLeft: "3vw"}}>
        <h1><b  style = {{color: "#2ebcf1", fontWeight: "bold", fontSize: "4vh"}}>Community</b> <b  style = {{color: "#152e52", fontWeight: "bolder", fontSize: "6vh"}}>Endorsement</b></h1>
        
        <br />

        <EndorsementCard photo = {lisaRaitt} 
        firstName = "Lisa" 
        lastName = "Raitt" 
        title = "The Hon. Lisa Raitt PC MP 2008 - 2019, Deputy Leader."
        endorsement = "Kerry Colborne has established herself as a hard-working community builder in Oakville. I am aware of her significant accomplishments and her talent for drawing together diverse people to achieve a common vision.  From our collaboration, while I was a Cabinet Minister and Kerry was leading the Chamber of Commerce, I know she possesses the right personality and experience to be an effective Member of Parliament.  She understands the workings of government and has experience collaboratively creating and debating policy.  Kerry will serve Oakville well and she has my unwavering support in seeking the Conservative Party nomination in Oakville." 
        />
        <EndorsementCard photo = {johnSawyer} 
        firstName = "John"
        lastName = "Sawyer" 
        title = "President, Oakville Chamber of Commerce, 2005 - 2018" 
        endorsement = "I have worked closely with Kerry for 15 years. She is smart, energetic and an experienced community leader. I know she will do an outstanding job representing Oakville in Parliament." 
        />
        <EndorsementCard photo = {lindaLeatherdale} 
        firstName = "Linda" 
        lastName = "Leatherdale"
        title = "Vice-President, Cambria Canada" 
        endorsement = "Canada needs a strong voice for our largest job creators – Main Street entrepreneurs who have given their blood, sweat and tears to create a vibrant, tax-paying middle class, the backbone of our economy, and who now are struggling to survive this deadly pandemic.  That voice for Oakville is Kerry Colborne, a seasoned, compassionate business executive, who has owned and operated her own small business in Oakville for the past 10 years, who has impressive international experience working with Fortune 100 companies, and who ranked in the Top 10 when working for the Business Development Bank of Canada.  In short, Kerry cares about people, growing businesses, creating jobs, and giving back to the community.  For years, she has lent her expertise to the Oakville Chamber of Commerce and other organizations, who make Oakville one of the most desired places to live in this country. She is a believer in fair taxation, fiscal responsibility, and government for the people and by the people.  She will work tirelessly to put an end to repeated scandals and waste of our precious tax dollars. Kerry wants to restore faith and trust in government.  She will fight for hard-working families.  She will fight for Oakville.  We need her voice." 
        />
        <EndorsementCard photo = {maryCardamone} 
        firstName = "Mary" 
        lastName = "Cardamone"
        title = "Past Campaign Chair - United Way of Oakville"
        endorsement = "I’ve known Kerry for many years through her volunteer work, her business in Oakville, and as the recipient of a Paul Harris Fellow that was awarded to her by my Rotary Club. Kerry is highly respected for her service to the community. She is also well known as someone who cares and who gets things done. Kerry understands the issues and how to develop policy and I think she’d be an outstanding voice in Ottawa for Oakville."
        />
        <EndorsementCard photo = {danLawrie} 
        firstName = "Dan"
        lastName = "Lawrie"
        title = "Founder & Chairman, Lawrie Insurance Group Inc."
        endorsement = "I have worked with Kerry for many years in both professional and volunteer capacities.  She distinguished herself as a real leader at the Oakville Chamber of Commerce.  She had the knack of listening to the membership, building coalitions, and leading us to achieve our goals.  I have no doubt Kerry would be an exceptional member of parliament who puts her constituents above all other considerations.  She has my unqualified support for the party nomination in Oakville."
        />
        <EndorsementCard photo = {laurenceHenderson} 
        firstName = "Laurence (Ren)"
        lastName = "Henderson"
        title =  "Partner, Henderson Roller Smit, Professional Corporation"
        endorsement = "Kerry has travelled many miles as an Oakville community volunteer and a successful entrepreneur.  I know firsthand from when Kerry worked with Rotary on the Oakville Awards For Business Excellence, and other projects over the years, that she has made vital contributions as a volunteer.Kerry’s many hours of community service have made her keenly aware of the interests and needs of Oakville’s citizens, we need her experience, expertise and outstanding people skills .  I know from working closely with Kerry that she is responsive, honourable, and diligent.  I enthusiastically support her as a contestant for the federal Conservative Party nomination in Oakville."
        />
        <EndorsementCard photo = {cathyDuddeck} 
        firstName = "Cathy"
        lastName = "Duddeck" 
        title = "Regional and Town Councillor Ward 2"
        endorsement = "I have worked with Kerry, both at the Town and Regional level, and I look forward to having the opportunity to work with her on a federal level. Her dedication and commitment to our community is exactly the voice we need to represent us here and in Ottawa!"
        />
        <EndorsementCard photo = {jeffKnoll} 
        firstName = "Jeff"
        lastName = "Knoll" 
        title = "Oakville Town & Region Councillor Ward 5"
        endorsement = "As a fellow Oakville-based business owner, I respect Kerry’s acumen and integrity.  I have been involved in representing Oakville at the local and regional levels, often alongside federal representatives; I know what our community needs from a member of parliament. I have known Kerry Colborne for years and counted on her to be a thoughtful and intelligent advocate for her fellow citizens. I am pleased to support her in the contest to choose the next federal Conservative candidate."
        />
        <EndorsementCard photo = {rayChisholm} 
        firstName = "Ray"
        lastName = "Chisholm" 
        title = "Councillor, Town of Oakville Ward 2"
        endorsement = "I have watched Kerry work deftly to build consensus and to make progress for our community. Working with her on the Oakville Arts Council and observing her as Chair of the Chamber of Commerce, I have seen how her selfless yet quietly confident approach earns her supporters across the spectrum. We need Kerry." 
        />

            
            
        <br />
        <img src = "" style = {{width: "40vw"}}/>
        <br /> <br />
      </Column>
      <RightColumn>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKd9ssh8KNRvzLtiSXwbTbuA7aC2hXFWwAKQU9vJd49bZCEQ/viewform?embedded=true" width="450" height="100%" style={{marginTop: "15vh"}} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      
      </RightColumn>
    </Container>
     <div style={{paddingBottom: "200px"}} />
      
    </div>
  );
};

export default Endorsements;
