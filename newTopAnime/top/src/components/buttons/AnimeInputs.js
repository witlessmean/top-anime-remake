import React, {useContext}from 'react'
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;
import { StyledInputs } from '../../reusableStyles';
import Button from '@material-ui/core/Button';


const AnimeInputs = () => {
    
    
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);

   
    const animeButton = (topOption) => {
        setAnimeUrl(topOption)
    }
    
    
    return (
        <StyledInputs>
                  <ul>
                  <li><Button variant="contained" color="primary" type='button' value='upcoming' size="large" onClick={(e) => animeButton('upcoming')}>Upcoming</Button></li>
                  <li><Button variant="contained" color="primary" type='button' value='airing' size="large" onClick={(e) => animeButton('airing')}>Airing</Button></li>
                  <li><Button variant="contained" color="primary" type='button' value='tv' size="large" onClick={(e) => animeButton('tv')}>TV</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='movie' size="large" onClick={(e) => animeButton('movie')}>Movie</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='ova' size="large" onClick={(e) => animeButton('ova')}>OVA</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='special' size="large" onClick={(e) => animeButton('special')}>Special</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='bypopularity' size="large" onClick={(e) => animeButton('bypopularity')}>bypopularity</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='favorite' size="large" onClick={(e) => animeButton('favorite')}>Favorite</Button> </li>
                  </ul>
        </StyledInputs>
    )
}

export default AnimeInputs

