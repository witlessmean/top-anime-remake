import React, {useState, useContext} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MobileMainButton} from '../../reusableStyles';
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
            <StyledNavLink to="/"><MobileMainButton variant="contailed" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Anime
            </MobileMainButton></StyledNavLink>
            <Menu 
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('upcoming')}}>Upcoming</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('airing')}}>airing</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('tv')}}>tv</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('movie')}}>movie</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('ova')}}>ova</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('special')}}>special</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('bypopularity')}}>bypopularity</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('favorite')}}>favorite</MenuItem>

    </Menu>
    </div>
      
      )
}

export default MobileAnimeMenu
