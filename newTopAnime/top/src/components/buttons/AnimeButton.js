import React, { useContext } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'
import { StyledNavLink } from '../../reusableStyles';
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';
import { CustomMainButton } from '../../reusableStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { device } from '../../utils/mediaBreakPoints';

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);
const matches = useMediaQuery(device.mobileS);

return (
        
        <div>
            <StyledNavLink to="/" ><CustomMainButton type="button" variant="contained" color="primary" onClick={(e) => {
               
               
               if((aniOpen === undefined && mangaOpen === undefined) || (aniOpen === undefined && mangaOpen === false) ){
                    setAniOpen(true)
                    setNavState(<AnimeInputs/>)
                   
                }else if(aniOpen === true && mangaOpen === undefined){
                    setAniOpen(undefined)
                    setNavState([])
                } else if(mangaOpen === true || mangaOpen === undefined ){
                       setMangaOpen(false)
                       setAniOpen(true) 
                       setNavState(<AnimeInputs/>)
                }else if(aniOpen === false && mangaOpen === false){
                    setAniOpen(true)
                    setMangaOpen(false)
                    setNavState(<AnimeInputs/>)
                }else {
                    setNavState([])
                    setAniOpen(undefined)
                    setMangaOpen(false)
                }

                
            }}>Anime</CustomMainButton></StyledNavLink>

        </div>

    )
}

export default AnimeButton


