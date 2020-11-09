import React, { useContext, useState } from 'react';
import {NavStateContext} from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
justify-content: start;
margin-bottom: 20px;
`


const Nav = () => {
    
const { navState } = useContext(NavStateContext)



    
    return (
       <>
       <StyledDiv>
             <AnimeButton />
             <MangaButton />    
             </StyledDiv>
            {navState}
                            </>
                            )
            
        
}

export default Nav


 
