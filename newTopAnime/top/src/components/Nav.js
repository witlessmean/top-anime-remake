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
import { withRouter } from "react-router";


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

const Nav = ({history, match, location}) => {
    
const { navState } = useContext(NavStateContext);
const { aniOpen } = useContext(AniOpenContext);
const { mangaOpen } = useContext(MangaOpenContext);

const displayOption = (aniOpen, mangaOpen) => {
  
  if(location.pathname === '/manga'){
    return <ChosenMangaOptionC/>
  }else if ((aniOpen === undefined) && (mangaOpen === undefined)){
 return <ChosenAniOptionC/> }
 else if((mangaOpen === true) && (aniOpen === false)){
   return <ChosenMangaOptionC />                                     
 }else if((mangaOpen === false) && (aniOpen === true)){
    return <ChosenAniOptionC/>
 } else if((mangaOpen === undefined) && (aniOpen === false)){                                                     
 } else if((aniOpen === false && mangaOpen === undefined)){
   return <ChosenAniOptionC/>
 }else if((aniOpen === undefined) && (mangaOpen === true)){
          return <ChosenMangaOptionC />
 }else {
   return <ChosenAniOptionC/>
 }
}
    
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

export default withRouter(Nav)



