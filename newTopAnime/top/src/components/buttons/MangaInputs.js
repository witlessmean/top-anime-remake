import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import { StyledInputs } from '../../reusableStyles';


const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);


    const mangaButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
      }
    
    return (
        <StyledInputs>
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
        </StyledInputs>
    )
}

export default MangaInputs

