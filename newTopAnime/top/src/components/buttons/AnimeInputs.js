import React, {useContext}from 'react'
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;


const AnimeInputs = () => {
    
    
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);

   
    const animeButton = (topOption) => {
        setAnimeUrl(topOption)
    }
    
    
    return (
        <div>
                  <input type='button' value='airing' onClick={(e) => animeButton('airing')}/> 
                  <input type='button' value='upcoming' onClick={(e) => animeButton('upcoming')}/>
                  <input type='button' value='tv' onClick={(e) => animeButton('tv')}/>
                  <input type='button' value='movie' onClick={(e) => animeButton('movie')}/>
                  <input type='button' value='ova' onClick={(e) => animeButton('ova')}/>
                  <input type='button' value='special' onClick={(e) => animeButton('special')}/>
                  <input type='button' value='bypopularity' onClick={(e) => animeButton('bypopularity')}/>
                  <input type='button' value='favorite' onClick={(e) => animeButton('favorite')}/> 
                  
        </div>
    )
}

export default AnimeInputs

