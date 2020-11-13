import React from 'react'
import styled from 'styled-components';

const StyledLogo = styled.div`
 font-family: 'Lobster Two', cursive;
 font-size: 4rem;
 position: absolute;
 margin-left: 1em;
 color: #AF125A;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`

const Logo = () => {
    return (
        
            <StyledLogo>
                    Top<br/>Anime
            </StyledLogo>
       
    )
}

export default Logo
