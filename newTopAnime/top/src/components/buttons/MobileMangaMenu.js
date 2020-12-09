import React, {useState, useContext} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MobileMainButton} from '../../reusableStyles';
import {MangaUrlContext} from '../../contexts/MangaUrlContext' ;
import {ChosenMangaOptionContext} from '../../contexts/ChosenMangaOptionContext';
import { StyledNavLink } from '../../reusableStyles';

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
           <StyledNavLink to="/manga"> <MobileMainButton variant="contailed" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Manga
            </MobileMainButton></StyledNavLink>
            <Menu 
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manga')}}>manga</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('novels')}}>novels</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('oneshots')}}>oneshots</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('doujin')}}>doujin</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manhwa')}}>manhwa</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('manhua')}}>manhua</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('bypopularity')}}>bypopularity</MenuItem>
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          mangaInputsButton('favorite')}}>favorite</MenuItem>

    </Menu>
    </div>
      
      )
}

export default MobileMangaMenu
