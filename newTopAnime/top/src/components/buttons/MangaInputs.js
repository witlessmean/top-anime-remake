import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import { StyledInputs } from '../../reusableStyles';
import Button from '@material-ui/core/Button';



const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);


    const mangaButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
      }
    
    return (
        <StyledInputs>
        <ul>
            <li><Button variant="contained" color="primary" type='button' value='manga' size='large' onClick={(e) => mangaButton('manga') } >Manga</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='novels' size='large' onClick={(e) => mangaButton('novels') } >Novels</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='oneshots' size='large' onClick={(e) => mangaButton('oneshots') } >Oneshots</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='doujin' size='large' onClick={(e) => mangaButton('doujin') } >Doujin</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhwa' size='large' onClick={(e) => mangaButton('manhwa') } >Manhwa</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhua' size='large' onClick={(e) => mangaButton('manhua') } >Manhua</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='bypopularity' size='large' onClick={(e) => mangaButton('bypopularity') }>ByPopularity</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='favorite' size='large' onClick={(e) => mangaButton('favorite') } >Favorite</Button></li>
        </ul>
        </StyledInputs>
    )
}

export default MangaInputs

