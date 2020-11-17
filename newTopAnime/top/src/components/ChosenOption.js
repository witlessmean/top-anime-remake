import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChosenOptionContext } from '../contexts/ChosenOptionContext';

const StyledDiv = styled.div`
margin: 5vh 2vw 5vh 2vw;
display: flex;
justify-content: center;
align-content: center;
font-family: 'Goldman', cursive;
font-size: 4rem;
`


const Line = styled.div`
background-color: black;
height: 1vh;
width: 10vw;
`

const ChosenOption = () => {
  
    const { option } = useContext(ChosenOptionContext);

  
    return (
        <StyledDiv>
            <Line />
            <div>{option}</div>
            <Line />
        </StyledDiv>
    )
}

export default ChosenOption
