import React from 'react';
import styled from 'styled-components';
import Photo from './photo'

const Box = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 25vh 25vh;
    margin: 0px 0px;
    border-radius: 5px;
    box-shadow: 1px 2px 9px gray;
    width: 80%;
    padding: 0.0em;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: 25vh 25vh 25vh 25vh;
        width: 100%;
    }

`



const PhotoGridB = ({photoA, titleA, photoB, titleB, photoC, titleC, photoD, titleD}) => {
    return (
        <Box>
           <Photo image = {photoA} title = {titleA} link = {""} cols = {3} rows = {1} />
           <Photo image = {photoB} title = {titleB} link = {""} cols = {2} rows = {1} />
           <Photo image = {photoC} title = {titleC} link = {""} cols = {2} rows = {1} />  
           <Photo image = {photoD} title = {titleD} link = {""} cols = {3} rows = {1} /> 
        </Box>
    )
}

export default PhotoGridB