import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChosenOptionContext } from '../contexts/ChosenOptionContext';

const StyledDiv = styled.div`
margin-top: 5vh ;
display: flex;
justify-content: center;
align-content: center;
height: 200px;
`


const Line = styled.div`
background-color: black;
height: 5px;
width: 20px;
`

const ChosenOption = () => {
  
    const { option, setOption } = useContext(ChosenOptionContext);

  
    return (
        <StyledDiv>
            <Line />
            <div>{option}</div>
            <Line />
        </StyledDiv>
    )
}

export default ChosenOption
