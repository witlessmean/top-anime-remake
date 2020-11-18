import React, { useContext } from 'react';
import { NavStateContext } from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import Logo from '../Logo';
import ChosenOption from './ChosenOption';

const StyledNavBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 13vh;
background-color: #273043; 
-webkit-box-shadow: 0 10px 5px #888888;
  -moz-box-shadow: 0 10px 5px #888888;
  box-shadow: 0 10px 5px #888888;
`
const StyledInputsDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const StyledButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;`

const Nav = () => {
    
const { navState } = useContext(NavStateContext)



    
    return (
       <>
       <Logo/>
       
       <StyledNavBar>
            <StyledButtonDiv> <AnimeButton />
             <MangaButton /> 
             </StyledButtonDiv>
             <StyledInputsDiv>{navState}</StyledInputsDiv>
            </StyledNavBar>
            <ChosenOption />
                            </>
                            )
            
        
}

export default Nav


 
