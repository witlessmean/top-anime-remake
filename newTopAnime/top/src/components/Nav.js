import React, { useContext } from 'react';
import { NavStateContext } from '../contexts/NavStateContext';
import { AniOpenContext } from '../contexts/AniOpenContext'
import { MangaOpenContext } from '../contexts/MangaOpenContext'
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import Logo from '../Logo';
import ChosenMangaOptionC from './mangaComponents/ChosenMangaOptionC';
import ChosenAniOptionC from './animeComponents/ChosenAniOptionC';


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
    
const { navState } = useContext(NavStateContext);
const { aniOpen } = useContext(AniOpenContext);
const { mangaOpen } = useContext(MangaOpenContext);

const displayOption = (aniOpen, mangaOpen) => {
  if((aniOpen === true ) || (aniOpen === false && mangaOpen === false)){
 return <ChosenAniOptionC/> }else {
   return <ChosenMangaOptionC />                                     //if ani = false and manga = false and last button clicked was manga return chosenmangaoption else return chosenanioption
 }
}
    
console.log(aniOpen, mangaOpen)

    return (
       <>
       <Logo/>
       
       <StyledNavBar>
            <StyledButtonDiv> <AnimeButton />
             <MangaButton /> 
             </StyledButtonDiv>
             <StyledInputsDiv>{navState}</StyledInputsDiv>
            </StyledNavBar>
           {displayOption(aniOpen, mangaOpen)}
                            </>
                            )
            
        
}

export default Nav



//{ (aniOpen === true) || (aniOpen && mangaOpen) === false ? <ChosenAniOptionC /> : <ChosenMangaOptionC /> }