import React, { useContext, useState } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'
import Button from '@material-ui/core/Button';
import { StyledNavLink } from '../../reusableStyles';
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';

const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);

return (
        
        <div>
            <StyledNavLink to="/manga" style={{marginLeft: '10%'}} ><Button type="button"  style={{width: '5vw', height: '2.5em', fontSize: '1.6rem', fontWeight: 'bolder'}} size="large" variant="contained" color="primary"  onClick={() => {
              if(mangaOpen === false || aniOpen === true){
                setNavState(<MangaInputs/>)
                setAniOpen(false)
                setMangaOpen(true)
            } else {
                setNavState([])
                setMangaOpen(false)
            }

            }}>Manga</Button></StyledNavLink>

        </div>

    )
}

export default MangaButton
