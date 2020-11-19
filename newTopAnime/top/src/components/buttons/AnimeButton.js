import React, { useContext, useRef } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'
import { StyledNavLink } from '../../reusableStyles';
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';
import { ChosenAniOptionContext } from '../../contexts/ChosenAniOptionContext'
import { ChosenMangaOptionContext } from '../../contexts/ChosenMangaOptionContext'
import { CustomMainButton } from '../../reusableStyles';

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);
const { chosenAniOption, setChosenAniOption } = useContext(ChosenAniOptionContext);
const { chosenMangaOption, setChosenMangaOption } = useContext(ChosenMangaOptionContext);
//console.log(lastMangaOption.current)
return (
        
        <div>
            <StyledNavLink to="/" ><CustomMainButton type="button" variant="contained" color="primary" onClick={(e) => {
                if(aniOpen === false || mangaOpen === true){
                    setMangaOpen(false)
                    setAniOpen(true)
                    setNavState(<AnimeInputs/>)
                    //setChosenMangaOption('')

                } else {
                    setNavState([])
                    setAniOpen(false)
                }

                
            }}>Anime</CustomMainButton></StyledNavLink>

        </div>

    )
}

export default AnimeButton


