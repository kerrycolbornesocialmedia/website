import React, {useState, useEffect} from 'react';
import Header from '../../header/header'
import styled from 'styled-components';
import headerImage from '../../../media/header.png'
import EndorsementCard from './endorsement_card/endorsement_card';
import EndorsementList from './endorsementList';


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
    const [items, setItems] = useState(EndorsementList);


  return (
    <div style={{}}>
      <Header image={headerImage}
        isMenuOpen={menu_state} />
         <Container>
        <Column style={{paddingRight: "7vw", fontSize: "14pt", paddingLeft: "3vw"}}>
        <h1><b  style = {{color: "#2ebcf1", fontWeight: "bold", fontSize: "4vh"}}>Community</b> <b  style = {{color: "#152e52", fontWeight: "bolder", fontSize: "6vh"}}>Endorsement</b></h1>
        
        <br />

        {items.map((item, index) => 
        (
            <EndorsementCard photo = {item.photo} firstName = {item.firstName} lastName = {item.lastName} title = {item.title} endorsement = {item.endorsement} />
        ))}
            
            
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
