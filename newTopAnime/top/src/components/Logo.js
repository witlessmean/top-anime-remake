import React from 'react'
import styled from 'styled-components';
import { device } from '../utils/mediaBreakPoints';

const StyledLogo = styled.div`
 
 @media ${device.mobileS}{
         font-size: 3rem;
         margin-left: 0.2em;
         margin-top: 0.2em;
 }
 @media ${device.mobileM}{
         font-size: 3.4rem;
         margin-top: 0;
 }
 @media ${device.tablet}{
         font-size: 4.7rem;
 }

 font-family: 'Lobster Two', cursive;
 font-size: 4rem;
 position: absolute;
 margin-left: 1em;
 color: white;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`

const Logo = () => {
    return (
        
            <StyledLogo>
                    Top<br/>Anime
            </StyledLogo>
       
    )
}

export default Logo
