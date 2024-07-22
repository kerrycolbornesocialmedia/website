import React from "react";
import styled from 'styled-components';


const Box = styled.div`
    border: 3px solid white;
    background-position: center;
    border-radius: 5px; 
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        width: 98%
    }
          &:hover {
    transform: scale(1.025);
  }

    & > a {
        text-decoration: none;
        font-weight: normal;
        color: white;
        font-style: italic;

        & > p {
            padding-left: 1vw;
            font-size: 10pt;
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
            <a href = {link} ><p>{title}</p></a>
        </Box>
    )
};

export default Photo;