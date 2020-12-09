import React, {useState, useContext} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AnimeInputs from './AnimeInputs';
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;
import {ChosenAniOptionContext} from '../../contexts/ChosenAniOptionContext';
import { colors } from '@material-ui/core';

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
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Anime
            </Button>
            <Menu 
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { 
          handleMenuClose(); 
          animeInputsButton('upcoming')}}>Upcoming</MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='airing' size="large" onClick={(e) => animeInputsButton('airing')}>Airing</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='tv' size="large" onClick={(e) => animeInputsButton('tv')}>TV</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='movie' size="large" onClick={(e) => animeInputsButton('movie')}>Movie</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='ova' size="large" onClick={(e) => animeInputsButton('ova')}>OVA</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='special' size="large" onClick={(e) => animeInputsButton('special')}>Special</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='bypopularity' size="large" onClick={(e) => animeInputsButton('bypopularity')}>bypopularity</Button></MenuItem>
        <MenuItem onClick={handleMenuClose}><Button variant="contained" color="primary" type='button' value='favorite' size="large" onClick={(e) => animeInputsButton('favorite')}>Favorite</Button></MenuItem>
    </Menu>
    </div>
      
      )
}

export default MobileAnimeMenu
