import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
`

const Tooltip = () => {
    return (
        <StyledDiv>
            myanimelist link
        </StyledDiv>
    )
}

export default Tooltip
