import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';



const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);


    const mangaButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
      }
    
    return (
        <div>
            <ul>
            <li><input type='button' value='manga' onClick={(e) => mangaButton('manga') } /></li>
            <li><input type='button' value='novels' onClick={(e) => mangaButton('novels') } /></li>
            <li><input type='button' value='oneshots' onClick={(e) => mangaButton('oneshots') } /></li>
            <li><input type='button' value='doujin' onClick={(e) => mangaButton('doujin') } /></li>
            <li><input type='button' value='manhwa' onClick={(e) => mangaButton('manhwa') } /></li>
            <li><input type='button' value='manhua' onClick={(e) => mangaButton('manhua') } /></li>
            <li><input type='button' value='bypopularity' onClick={(e) => mangaButton('bypopularity') } /></li>
            <li><input type='button' value='favorite' onClick={(e) => mangaButton('favorite') } /></li>
            </ul>
        </div>
    )
}

export default MangaInputs

