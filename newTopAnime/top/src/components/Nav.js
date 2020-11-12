import React, { useContext, useState } from 'react';
import {NavStateContext} from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import logo from '../images/logo.PNG'

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
height: 11vh;
background-color: #cbebe3; 
`
//whole nav going to be a different color like anichart. logo in the top left. 

const Nav = () => {
    
const { navState } = useContext(NavStateContext)



    
    return (
       <>
       <img style={{position: 'absolute'}} alt="website logo" src={logo} />
       <StyledDiv>
             <AnimeButton />
             <MangaButton />    
             
            {navState}
            </StyledDiv>
                            </>
                            )
            
        
}

export default Nav


 
