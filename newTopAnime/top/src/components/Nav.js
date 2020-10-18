import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import {AnimeUrlContext} from '../contexts/AnimeUrlContext' ;
import {MangaUrlContext} from '../contexts/MangaUrlContext';
import {MangaDataContext} from '../contexts/MangaDataContext';
import {CurrentPicsContext} from '../contexts/CurrentPicsContext';

const Nav = () => {
    
const { currentPics, setCurrentPics } = useContext(CurrentPicsContext)
const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);
const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
const { mangaData, setMangaData } = useContext(MangaDataContext);

console.log(mangaData)
const navOnClick = (topOption) => {
    setAnimeUrl(topOption)
}
    
const mangaButton = (topMangaOption) => {
  setMangaData(topMangaOption)
}

    
    return (
        <div>
            <input type='button' value={animeUrl} onClick={() => navOnClick('upcoming')}/>
            {/* <input type='button' value={mangaUrl} onClick={() => mangaButton('manga')} />  */}
            
        </div>
    )
}

export default Nav

