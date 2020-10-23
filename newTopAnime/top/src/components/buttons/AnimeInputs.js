import React, {useContext}from 'react'
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;


const Abutt = () => {
    
    
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);

   
    const animeButton = (topOption) => {
        setAnimeUrl(topOption)
    }
    
    
    return (
        <div>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('airing')}/> 
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('upcoming')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('tv')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('movie')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('ova')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('special')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('bypopularity')}/>
                  <input type='button' value={animeUrl} onClick={(e) => animeButton('favorite')}/> 
                  
        </div>
    )
}

export default Abutt