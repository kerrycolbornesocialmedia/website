import React from 'react'
import logo from '../../media/lgoo_horizontal_white.png'
import iconX from './local_media/icon_x.png'
import iconIn from './local_media/icon_in.png'
import iconInsta from './local_media/icon_insta.png'
import iconF from './local_media/icon_f.png'
import iconLink from './local_media/icon_link.png'
import styled from 'styled-components';
const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 3vw 20vw auto 7vw 7vw 7vw 7vw 7vw 3vw;
    grid-template-rows: 10vh;
    place-items: center;
    height: 10vh;
    width: 100%;
    background-color: #152e52;

    @media (max-width: 768px) {
        grid-template-columns: 20vw 20vw 20vw 20vw 20vw;
        grid-template-rows: 5vh 0vh 10vh 7vh;
        height: 25vh;

    }


`
const LogoBox = styled.div`
    padding-left: 3vw;
    margin-left: 3vw;
    
    @media (max-width: 768px) {
        margin-left: 0px;
        margin-top: 5vh;
        grid-column: span 5;
        grid-row: span 1;
        padding: 0px 0px;
    }

    & > img {
        height: 8vh;
        
        @media (max-width: 768px) {
            margin-left: 0px;
            height: 10vh;
        }
    }

`
const SpacerBox = styled.div`
    width: 30vw;
    
    @media (max-width: 768px) {
        height: 0px;
        margin-left: 0px;
        grid-column: span 5;
        grid-row: span 1;
    }

`
const IconBox = styled.div`
    
    @media (max-width: 768px) {
        margin-left: 0px;
        grid-column: span 1;
        grid-row: span 1;
    }

`


const Footer = () => {

return(
    <FooterContainer>
        <div></div>
        <LogoBox>
            <img src = {logo} />
        </LogoBox>
        <SpacerBox />
        <IconBox>
            <a target="_blank" href = "https://x.com/ColborneKerry">
                <img src = {iconX}  style={{height: "6vh", padding: "1em 1em"}}/>
            </a>            
        </IconBox>
        <IconBox>
            <a target="_blank" href = "https://www.linkedin.com/in/kerry-colborne-4540148/">
                <img src = {iconIn}  style={{height: "6vh", padding: "1em 1em"}} />
            </a>
        </IconBox>
        <IconBox>
            <a  target="_blank" href = "https://www.instagram.com/kerrycolborne/">
                <img src = {iconInsta}  style={{height: "6vh", padding: "1em 1em"}} />
            </a>
        </IconBox>
        <IconBox>
            <a href = "https://www.facebook.com/KerryColborne">
                <img src = {iconF}  style={{height: "6vh", padding: "1em 1em"}} />
            </a>    
        </IconBox>
        <IconBox target="_blank" style={{marginRight: "3vw"}}>
            <a href = "https://linktr.ee/kerryforoakvillewest">
                <img src = {iconLink}  style={{height: "6vh", padding: "1em 1em"}} />
            </a>    
        </IconBox>
        <div></div>
    </FooterContainer>
)
};

export default Footer;