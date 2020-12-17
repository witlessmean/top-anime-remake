import React, {useState, useContext} from 'react'
import {MobileMainButton, StyledMenu, StyledMenuItem} from '../../reusableStyles';
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;
import {ChosenAniOptionContext} from '../../contexts/ChosenAniOptionContext';
import { StyledNavLink } from '../../reusableStyles';


const MobileAnimeMenu = () => {
    
    const [menuAnchor, setMenuAnchor] = useState(null);
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);
    const { chosenAniOption, setChosenAniOption } = useContext(ChosenAniOptionContext);
    
    const animeInputsButton = (topOption) => {
      setAnimeUrl(topOption)
      setChosenAniOption(topOption)
      }
    
    const handleMenuClick = (e) => {
      setMenuAnchor(e.currentTarget)
    };

    const handleMenuClose = () => {
      setMenuAnchor(null)
    }

    return (
      
      <div>
            <StyledNavLink to="/"><MobileMainButton variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Anime
            </MobileMainButton></StyledNavLink>
            <StyledMenu 
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <StyledMenuItem 
        onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('upcoming')}}>Upcoming</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('airing')}}>airing</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('tv')}}>tv</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('movie')}}>movie</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('ova')}}>ova</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('special')}}>special</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('bypopularity')}}>bypopularity</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('favorite')}}>favorite</StyledMenuItem>

    </StyledMenu>
    </div>
      
      )
}

export default MobileAnimeMenu
