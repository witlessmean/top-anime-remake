import React, {useContext}from 'react'
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;


const AnimeInputs = () => {
    
    
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);

   
    const animeButton = (topOption) => {
        setAnimeUrl(topOption)
    }
    
    
    return (
        <div>
                  <ul>
                  <li><input type='button' value='upcoming' onClick={(e) => animeButton('upcoming')}/></li>
                  <li><input type='button' value='airing' onClick={(e) => animeButton('airing')}/> </li>
                  <li><input type='button' value='tv' onClick={(e) => animeButton('tv')}/></li>
                  <li><input type='button' value='movie' onClick={(e) => animeButton('movie')}/></li>
                  <li><input type='button' value='ova' onClick={(e) => animeButton('ova')}/></li>
                  <li><input type='button' value='special' onClick={(e) => animeButton('special')}/></li>
                  <li><input type='button' value='bypopularity' onClick={(e) => animeButton('bypopularity')}/></li>
                  <li><input type='button' value='favorite' onClick={(e) => animeButton('favorite')}/></li>
                  </ul>
        </div>
    )
}

export default AnimeInputs

