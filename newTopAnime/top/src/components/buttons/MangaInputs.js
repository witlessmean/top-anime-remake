import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import {ChosenOptionContext} from '../../contexts/ChosenOptionContext';
import { StyledInputs } from '../../reusableStyles';
import Button from '@material-ui/core/Button';



const MangaInputs = () => {
    

const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
const { option, setOption } = useContext(ChosenOptionContext);


    const mangaInputsButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
        setOption(topMangaOption);
      }
    
    return (
        <StyledInputs>
        <ul>
            <li><Button variant="contained" color="primary" type='button' value='manga' size='large' onClick={(e) => mangaInputsButton('manga') } >Manga</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='novels' size='large' onClick={(e) => mangaInputsButton('novels') } >Novels</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='oneshots' size='large' onClick={(e) => mangaInputsButton('oneshots') } >Oneshots</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='doujin' size='large' onClick={(e) => mangaInputsButton('doujin') } >Doujin</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhwa' size='large' onClick={(e) => mangaInputsButton('manhwa') } >Manhwa</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhua' size='large' onClick={(e) => mangaInputsButton('manhua') } >Manhua</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='bypopularity' size='large' onClick={(e) => mangaInputsButton('bypopularity') }>ByPopularity</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='favorite' size='large' onClick={(e) => mangaInputsButton('favorite') } >Favorite</Button></li>
        </ul>
        </StyledInputs>
    )
}

export default MangaInputs

