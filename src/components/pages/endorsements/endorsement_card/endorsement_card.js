
import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    box-shadow: 1px 2px 9px gray;
    border-radius: 5px;
    display: grid;
    margin-top: 2vh;
    margin-bottom: 2vh;
    grid-template-columns: 10vw 2vw 20vw 10vw;
    grid-template-rows: 3vh 5vh 6vh auto;
    flex-direction: column;
    padding: 1.25em 1em;

    @media (max-width: 768px) {
        grid-template-columns: 25vw 10vw 30vw 10vw;
        grid-template-rows: 3vh 5vh 10vh auto;
        padding-top: 1em;
        padding-bottom: 1em;
    }
  &:hover {
    transform: scale(1.025);
  }

`

const PhotoBox = styled.div`
    font-size: 12pt;
    color: #2ebcf1;
    grid-column: span 1;
    grid-row: span 4;
    width: 10vw;
    height: 20vh;

    @media (max-width: 768px) {
        width: 40vw;
        height: 15vh;
        grid-row: span 3;
        
    }

    & > img {
        height: 100%;
        object-fit: cover;
        object-position: center;
        @media (max-width: 768px) {
        height: 14vh;
        
        }

    }

`
const FirstNameBox = styled.div`
    font-size: 16pt;
    color: #2ebcf1;
    grid-column: span 2;
    grid-row: span 1;
    padding-left: 0em;
    margin-top: 0em;
    padding-top: 0em;
    
    @media (max-width: 768px) {
        font-size: 14pt;
    }

`

const LastNameBox = styled.div`
    font-size: 22pt;
    color: #152e52;
    grid-column: span 2;
    grid-row: span 1;
    padding-left: 0em;
    margin-top: 0em;
    padding-top: 0em;
    
    @media (max-width: 768px) {
        font-size: 16pt;
    }

`

const TitleBox = styled.div`
    font-size: 12pt;
    color: gray;
    grid-column: span 2;
    grid-row: span 1;
    padding-left: 0em;
    margin-top: 0em;
    padding-top: 0em;
    
    @media (max-width: 768px) {
        font-size: 8pt;
        padding-bottom: 4vh;
    }

`
const EndorsementBox = styled.div`
    font-size: 11pt;
    color: black;
    grid-column: span 2;
    grid-row: span 1;
    padding-left: 0em;
    margin-top: 0em;
    padding-top: 0em;
    
    @media (max-width: 768px) {
        grid-column: span 4;
        padding-bottom: 2vh;
        font-size: 8pt;
    }

`

const EndorsementCard = ({photo, firstName, lastName, title, endorsement}) => {
    
    const [details, setDetails] = React.useState({
        photo: photo,
        firstName: firstName,
        lastName: lastName,
        title: title,
        endorsementFull: endorsement,
        endorsementPreview: endorsement.substring(0, 200) +  " . . . ",
        endorsement: endorsement.substring(0, 200) +  " . . . ",
        endorsementSelect: 0,
    });


    function toggleFullEndorsement() {
        setDetails((prevData) => ({ 
            ...prevData, 
            endorsement: (details.endorsementSelect == 1) ? details.endorsementFull : details.endorsementPreview,
            loadMore: "",
            endorsementSelect: (details.endorsementSelect == 1) ? 0 : 1,
        }))
    }

return (
    <a onClick = {toggleFullEndorsement} >
    <Card>
        <PhotoBox>
            <img src = {details.photo} />
        </PhotoBox>
        <div></div>
        <FirstNameBox>
            <p style={{margin: "0px 0px"}}>{details.firstName}</p>
        </FirstNameBox>
        <div></div>
        <LastNameBox>
        <p style={{margin: "0px 0px"}}>{details.lastName}</p>
        </LastNameBox>
        <div></div>
        <TitleBox>
        <p style={{margin: "0px 0px"}}>{details.title}</p>
        </TitleBox>
        <div></div>
         
        <EndorsementBox>
        <p style={{margin: "0px 0px"}}>"{details.endorsement}"" </p>
        </EndorsementBox>

    </Card>
    </a>
);
};

export default EndorsementCard;

