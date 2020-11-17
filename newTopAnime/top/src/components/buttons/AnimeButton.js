import React, { useContext, useState } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'
import Button from '@material-ui/core/Button';
import { StyledNavLink } from '../../reusableStyles';
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);

return (
        
        <div>
            <StyledNavLink to="/" ><Button type="button" style={{width: '5vw', height: '2.5em', fontSize: '1.6rem', fontWeight: 'bolder'}} variant="contained" color="primary" onClick={(e) => {
                if(aniOpen === false || mangaOpen === true){
                    setNavState(<AnimeInputs/>)
                    setAniOpen(true)
                    setMangaOpen(false)
                } else {
                    setNavState([])
                    setAniOpen(false)
                }
                    console.log(aniOpen)
                    console.log(mangaOpen)
                
            }}>Anime</Button></StyledNavLink>

        </div>

    )
}

export default AnimeButton
