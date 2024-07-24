import React from 'react';
import styled from 'styled-components';
import Photo from './photo'

const Box = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33% ;
    grid-template-rows: 30vh 20vh;
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



const PhotoGridC = ({photoA, titleA, photoB, titleB, photoC, titleC, photoD, titleD}) => {
    return (
        <Box>
           <Photo image = {photoA} title = {titleA} link = {""} cols = {2} rows = {1} />
           <Photo image = {photoB} title = {titleB} link = {""} cols = {1} rows = {2} />
           <Photo image = {photoC} title = {titleC} link = {""} cols = {1} rows = {1} />  
           <Photo image = {photoD} title = {titleD} link = {""} cols = {1} rows = {1} /> 
        </Box>
    )
}

export default PhotoGridC