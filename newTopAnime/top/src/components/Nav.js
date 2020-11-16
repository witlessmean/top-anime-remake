import React, { useContext } from 'react';
import { NavStateContext } from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import Logo from '../Logo';
import ChosenOption from './ChosenOption';

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
height: 11vh;
background-color: #273043; 
-webkit-box-shadow: 0 10px 5px #888888;
  -moz-box-shadow: 0 10px 5px #888888;
  box-shadow: 0 10px 5px #888888;
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
            <ChosenOption />
                            </>
                            )
            
        
}

export default Nav


 
