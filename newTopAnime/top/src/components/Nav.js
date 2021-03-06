import React, { useContext } from 'react';
import { NavStateContext } from '../contexts/NavStateContext';
import { AniOpenContext } from '../contexts/AniOpenContext'
import { MangaOpenContext } from '../contexts/MangaOpenContext'
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';
import styled from 'styled-components';
import Logo from './Logo';
import ChosenMangaOptionC from './mangaComponents/ChosenMangaOptionC';
import ChosenAniOptionC from './animeComponents/ChosenAniOptionC';
import DarkModeC from './DarkModeC';
import { withRouter } from "react-router";
import { device } from '../utils/mediaBreakPoints';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileMangaMenu from './buttons/MobileMangaMenu';
import MobileAnimeMenu from './buttons/MobileAnimeMenu';


const StyledNavBar = styled.div`
@media ${device.mobileS}{
  height: 16vh;
}
@media ${device.mobileM}{
  height: 13vh
}
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 13vh;
background-color: #273043;               
-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
-moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
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
    
const matches = useMediaQuery(device.mobileS); 
const matchesLaptop = useMediaQuery(device.laptop);
const { navState } = useContext(NavStateContext);
const { aniOpen } = useContext(AniOpenContext);
const { mangaOpen } = useContext(MangaOpenContext);

const displayOption = (aniOpen, mangaOpen) => {
  
  if(location.pathname === '/manga'){
    return <ChosenMangaOptionC />
  }else if ((aniOpen === undefined) && (mangaOpen === undefined)){
 return <ChosenAniOptionC /> }
 else if((mangaOpen === true) && (aniOpen === false)){
   return <ChosenMangaOptionC />                                     
 }else if((mangaOpen === false) && (aniOpen === true)){
    return <ChosenAniOptionC />
 } else if((mangaOpen === undefined) && (aniOpen === false)){                                                     
 } else if((aniOpen === false) && (mangaOpen === undefined)){
   return <ChosenAniOptionC />
 }else if((aniOpen === undefined) && (mangaOpen === true)){
          return <ChosenMangaOptionC />
 }else {
   return <ChosenAniOptionC/>
 }
};

const displayMenuType = () => {
  if((matches === true) && (matchesLaptop === false)){
    return (
      <StyledButtonDiv>
                <MobileAnimeMenu /> 
                <MobileMangaMenu />
      </StyledButtonDiv>
    )
  }else if((matchesLaptop === true) && (matches === true)){
    return( <StyledButtonDiv> 
    <AnimeButton />
    <MangaButton /> 
 </StyledButtonDiv>
    )
  }
}
    //console.log(matches, matchesLaptop)
    return (
       <>
       <Logo/>
       <DarkModeC />   
       <StyledNavBar>
{displayMenuType()}
             <StyledInputsDiv>{navState}</StyledInputsDiv>        
            </StyledNavBar>
           {displayOption(aniOpen, mangaOpen)}
                            </>
                            )
            }

export default withRouter(Nav)



