import React, { useContext, useState } from 'react';
import {NavStateContext} from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import Logo from '../Logo';

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
height: 11vh;
background-color: #273043; 
`


const Nav = () => {
    
const { navState } = useContext(NavStateContext)



    
    return (
       <>
       <Logo/>
       <StyledDiv>
             <AnimeButton />
             <MangaButton />    
             
            {navState}
            </StyledDiv>
                            </>
                            )
            
        
}

export default Nav


 
