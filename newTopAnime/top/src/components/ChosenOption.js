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




const ChosenOption = () => {
  
    const { option } = useContext(ChosenOptionContext);

  
    return (
        <StyledDiv>
            
            {option}
            
        </StyledDiv>
    )
}

export default ChosenOption
