import React from "react";
import styled from "styled-components";
import a from '../../media/KERRY-with-John-Sawyer-Edited.jpg'

const Box = styled.div`
  background-color: white;
  border-radius: 5px;

  box-shadow: 1px 2px 9px gray;
  width: 100%;
  margin-bottom: 0vh;
  
  @media (max-width: 768px) {
    width: 100%;
  }

`;
const Image = styled.div`
    width: 100%;
    
    height: 50vh;
    margin: 0px 0px;
    background-position: center;
    border-radius: 5px; 
    background-repeat: no-repeat;
    background-size: cover;
    

    & > h1{
    color: white;
    padding: 0vh 3vw;
    padding-top: 5vh;
      @media (max-width: 768px) {
      padding: 5vh 8vw;
      padding-bottom: 2vh;
      font-size: 18pt;
      }
    }
    & > p {
      color: white;
      padding: 0vh 3vw;
      font-size: 14pt;

      @media (max-width: 768px) {
        margin: 0vh 4vw;
        margin-bottom: 2vh;
        font-size: 10pt;
    }
    
    }
`;

const TopTitle = styled.div`
    color: #152e52;
    font-weight: bold;
    padding: 0vh 2vw;
    font-size: 12pt;
      @media (max-width: 768px) {
      padding: 0vh 8vw;

      font-size: 18pt;
      
      }
`;
const BottomTitle = styled.div`
color: #1d1717; #152e52; #01a5e0;
    padding: 0vh 2vw;
    font-weight: bolder;
    font-size: 24pt;
      @media (max-width: 768px) {
      padding: 0vh 8vw;
      padding-bottom: 2vh;
      font-size: 32pt;
      }
    
`;
const Details = styled.div`
    width: 100%;
    background-color: #e7f6fc;
    padding-bottom: 4vh;
    margin: 0px 0px;
    padding: 2vh 0vw;


   
    & > p {

      padding: 0vh 2vw;
      font-size: 12pt;
        font-style: italic;
      @media (max-width: 768px) {
        margin: 0vh 4vw;
        margin-bottom: 2vh;
        font-size: 10pt;
    }
    
    }

      
`;

const Attribution = styled.div`
  padding: 0vh 2vw;
  font-size: 8pt;  
  @media (max-width: 768px) {
    margin: 0vh 4vw;
    margin-bottom: 2vh;
    font-size: 10pt;
}`;

const MapSideCard = ({map, top, title, subtitle}) => {
    return (
        <Box>
            
            

            <Image style={{backgroundImage: `url(${map})` }} />
            
            
            
            <p></p>
        </Box>
    )
};

export default MapSideCard;
