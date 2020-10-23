import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import {MangaDataContext} from '../../contexts/MangaDataContext';
import {CurrentPicsContext} from '../../contexts/CurrentPicsContext';


const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
const { mangaData, setMangaData } = useContext(MangaDataContext);
const {  currentPics ,setCurrentPics } = useContext(CurrentPicsContext);  
    const mangaButton = (topMangaOption) => {
        setMangaData(topMangaOption)
        setCurrentPics(mangaData)
      }
    
    return (
        <div>
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('manga') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('novels') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('oneshots') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('doujin') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('manhwa') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('manhua') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('bypopularity') } />
            <input type='button' value={mangaUrl} onClick={(e) => mangaButton('favorite') } />
        </div>
    )
}

export default MangaInputs

