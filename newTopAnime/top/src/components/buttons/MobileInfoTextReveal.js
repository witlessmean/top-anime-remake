import React from 'react';
import styled from 'styled-components';
import { infoContainerFunc } from '../../utils/infoContainerFunc';

//we're able to receive 'up' from the theme provider inside of the MobileReveal component. 
const StyledMobileInfoTextReveal = styled.div`
position: absolute;
text-align: center;
bottom: 0;
background-color: rgba(0, 0, 0, 0.6);
height: ${ (props) => {
  return props.theme.up === true ? '16% ' : '100% '
} 
  };

width: 100%;
`

const MobileInfoTextReveal = ({up}) => {
    console.log(up)
    return (
        <StyledMobileInfoTextReveal>
            {!up ? infoContainerFunc() : undefined}
        </StyledMobileInfoTextReveal>
    )
}

export default MobileInfoTextReveal



//two major problems, why do I have to say not up here instead of up? secondly i need to trace some of this function back because I'm not getting the title. 


