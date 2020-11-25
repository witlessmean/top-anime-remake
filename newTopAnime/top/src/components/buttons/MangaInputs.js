import React, {useContext} from 'react';
import {MangaUrlContext} from '../../contexts/MangaUrlContext';
import {ChosenMangaOptionContext} from '../../contexts/ChosenMangaOptionContext';
import { StyledInputs } from '../../reusableStyles';
import Button from '@material-ui/core/Button';
import {useSpring, animated} from 'react-spring';


const MangaInputs = () => {
    
    const springProps = useSpring({opacity: 1, from: {opacity: 0}})
    const { mangaUrl, setMangaUrl } = useContext(MangaUrlContext);
    const { chosenMangaOption, setChosenMangaOption } = useContext(ChosenMangaOptionContext);


    const mangaInputsButton = (topMangaOption) => {
        setMangaUrl(topMangaOption);
        setChosenMangaOption(topMangaOption);
      }
    
    return (
        <StyledInputs>
        <animated.ul style={springProps} >
            <li><Button variant="contained" color="primary" type='button' value='manga' size='large' onClick={(e) => mangaInputsButton('manga') } >Manga</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='novels' size='large' onClick={(e) => mangaInputsButton('novels') } >Novels</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='oneshots' size='large' onClick={(e) => mangaInputsButton('oneshots') } >Oneshots</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='doujin' size='large' onClick={(e) => mangaInputsButton('doujin') } >Doujin</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhwa' size='large' onClick={(e) => mangaInputsButton('manhwa') } >Manhwa</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='manhua' size='large' onClick={(e) => mangaInputsButton('manhua') } >Manhua</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='bypopularity' size='large' onClick={(e) => mangaInputsButton('bypopularity') }>ByPopularity</Button></li>
            <li><Button variant="contained" color="primary" type='button' value='favorite' size='large' onClick={(e) => mangaInputsButton('favorite') } >Favorite</Button></li>
        </animated.ul>
        </StyledInputs>
    )
}

export default MangaInputs

