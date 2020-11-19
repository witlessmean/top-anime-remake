import React, { useContext } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'
import { AniOpenContext } from '../../contexts/AniOpenContext';
import { MangaOpenContext } from '../../contexts/MangaOpenContext';
import { ChosenAniOptionContext } from '../../contexts/ChosenAniOptionContext'
import { ChosenMangaOptionContext } from '../../contexts/ChosenMangaOptionContext'
import { CustomMainButton } from '../../reusableStyles';
import { StyledNavLink } from '../../reusableStyles';
import ChosenAniOptionC from '../animeComponents/ChosenAniOptionC';
import ChosenMangaOptionC from '../mangaComponents/ChosenMangaOptionC';


const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);
const { aniOpen, setAniOpen } = useContext(AniOpenContext);
const { mangaOpen, setMangaOpen } = useContext(MangaOpenContext);
const { chosenAniOption, setChosenAniOption } = useContext(ChosenAniOptionContext);
const { chosenMangaOption, setChosenMangaOption } = useContext(ChosenMangaOptionContext); 

return (
         //if ani = false and manga = false and last button clicked was manga return chosenmangaoption else return chosenanioption
 
        <div>
            <StyledNavLink to="/manga" style={{marginLeft: '10%'}} ><CustomMainButton variant="contained" color="primary"  onClick={() => {
              if(mangaOpen === false || aniOpen === true){
                
                setAniOpen(false)
                setMangaOpen(true)
                setNavState(<MangaInputs/>)
               
                //setChosenAniOption('')
            } else if(aniOpen === false && mangaOpen === true){
                setChosenMangaOption(<ChosenMangaOptionC/>)
            } 
            
            
            
            
            else {
                setNavState([])
                
                setMangaOpen(false)
            }

            }}>Manga</CustomMainButton></StyledNavLink>

        </div>

    )
}

export default MangaButton
