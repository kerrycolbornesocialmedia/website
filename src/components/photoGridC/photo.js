import React from "react";
import styled from 'styled-components';


const Box = styled.div`
    border: 0px solid white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    color: transparent;
    font-size: 24pt;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%
    }
    &:hover {
    transform: scale(1.025);
    border-radius: 5px;
    filter: brightness(60%);

    z-index: 2;
        & > div {
        color: white;
        z-index: 1;
        position: absolute;
        width: 50%;
      top: 50%;
      left: 50%;
      mix-blend-mode: normal;
      transform: translate(-50%, -50%);
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);  
    }
    
    
  }

    & > div > 
    }

`;


const Photo = ({image, title, link, cols, rows}) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    if(isMobile){
        rows = 1
        cols = 1
    }
        
    return (
        <Box style = {{ gridColumn:  `span ${cols}`, gridRow: `span ${rows}`, backgroundImage: `url(${image})`}}  onClick = {() => {window.location = link }}> 
            
            <div style={{position: "absolute", bottom: "2vh", right: "2vw"}}>
                {title}
            </div>
        </Box>

    )
};

export default Photo;