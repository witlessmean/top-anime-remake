import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import {MangaDataContext} from '../../contexts/MangaDataContext';


const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
const { mangaData, setMangaData } = useContext(MangaDataContext);

    const mangaButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
      }
    
    return (
        <div>
            <input type='button' value='manga' onClick={(e) => mangaButton('manga') } />
            <input type='button' value='novels' onClick={(e) => mangaButton('novels') } />
            <input type='button' value='oneshots' onClick={(e) => mangaButton('oneshots') } />
            <input type='button' value='doujin' onClick={(e) => mangaButton('doujin') } />
            <input type='button' value='manhwa' onClick={(e) => mangaButton('manhwa') } />
            <input type='button' value='manhua' onClick={(e) => mangaButton('manhua') } />
            <input type='button' value='bypopularity' onClick={(e) => mangaButton('bypopularity') } />
            <input type='button' value='favorite' onClick={(e) => mangaButton('favorite') } />
        </div>
    )
}

export default MangaInputs

