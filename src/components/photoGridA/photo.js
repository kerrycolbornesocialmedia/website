import React from "react";
import styled from 'styled-components';


const Box = styled.div`
    border: 0px solid white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    @media (max-width: 768px) {
        width: 100%
    }
          &:hover {
    transform: scale(1.025);
    filter: brightness(75%);
  }

    & > div > a {
        text-decoration: none;
        font-weight: normal;
        color: white;
        font-style: italic;
        
        background-color: rgba(255, 255, 255, 0.8);
        & > p {
            padding-left: 1vw;
            font-size: 14pt;
            z-index: 1;
            @media (max-width: 768px) {
                padding-left: 4vw;
            }
        }
    }

`;

const Photo = ({image, title, link, cols, rows}) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    if(isMobile){
        rows = 1
        cols = 1
    }
        
    return (
        <Box style = {{ gridColumn:  `span ${cols}`, gridRow: `span ${rows}`, backgroundImage: `url(${image})`}}> 
            <div style={{position: "absolute", bottom: "2vh", right: "2vw" }}>
                <a href = {link} ><p>{title}</p></a>
            </div>
        </Box>
    )
};

export default Photo;