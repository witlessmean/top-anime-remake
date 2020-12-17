import React, {useState, useContext} from 'react'
import Menu from '@material-ui/core/Menu';
import {MobileMainButton, StyledMenuItem, StyledNavLink} from '../../reusableStyles';
import {MangaUrlContext} from '../../contexts/MangaUrlContext' ;
import {ChosenMangaOptionContext} from '../../contexts/ChosenMangaOptionContext';

const MobileMangaMenu = () => {
    
    const [menuAnchor, setMenuAnchor] = useState(null);
    const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
    const { chosenMangaOption, setChosenMangaOption } = useContext(ChosenMangaOptionContext);
    
    const mangaInputsButton = (topOption) => {
      setMangaUrl(topOption)
      setChosenMangaOption(topOption)
      }
    
    const handleMenuClick = (e) => {
      setMenuAnchor(e.currentTarget)
    };

    const handleMenuClose = () => {
      setMenuAnchor(null)
    }

    return (
      
      <div>
           <StyledNavLink to="/manga"> <MobileMainButton style={{margin: '0.5em'}} variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Manga
            </MobileMainButton></StyledNavLink>
            <Menu 
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manga')}}>manga</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('novels')}}>novels</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('oneshots')}}>oneshots</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('doujin')}}>doujin</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manhwa')}}>manhwa</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manhua')}}>manhua</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('bypopularity')}}>bypopularity</StyledMenuItem>
        <StyledMenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('favorite')}}>favorite</StyledMenuItem>
    </Menu>
    </div>
      
      )
}

export default MobileMangaMenu
