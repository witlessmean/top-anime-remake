import React, { useContext } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';
import { CustomMainButton } from '../../reusableStyles';
import { StyledNavLink } from '../../reusableStyles';



const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);


return (
         //if ani = false and manga = false and last button clicked was manga return chosenmangaoption else return chosenanioption
 
        <div>
            <StyledNavLink to="/manga" style={{marginLeft: '10%'}} ><CustomMainButton variant="contained" color="primary"  onClick={() => {
                
                
                if((aniOpen === undefined) && (mangaOpen === undefined) || (mangaOpen === undefined) && (aniOpen === false)){
                    setMangaOpen(true)
                    setNavState(<MangaInputs/>)
                   
                } else if((mangaOpen === true) && (aniOpen === undefined)){
                            setMangaOpen(false)
                            setNavState([])
                }else if((aniOpen === true) || (aniOpen === undefined)){
                       setAniOpen(false)
                       setMangaOpen(true) 
                       setNavState(<MangaInputs/>)
                }else if((aniOpen === false) && (mangaOpen === false)){
                        setMangaOpen(true)
                        setAniOpen(false)
                        setNavState(<MangaInputs/>)
                }else{
                    setNavState([])
                    setMangaOpen(undefined)                                             
                    setAniOpen(false)
                }

            }}>Manga</CustomMainButton></StyledNavLink>

        </div>

    )
}

export default MangaButton
