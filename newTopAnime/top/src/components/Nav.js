import React, { useContext, useState } from 'react';
import {NavStateContext} from '../contexts/NavStateContext';
import AnimeButton from './buttons/AnimeButton';
import MangaButton from './buttons/MangaButton';

const Nav = () => {
    
const { navState, setNavState } = useContext(NavStateContext)



    
    return (
        <div>
             <AnimeButton />
             <MangaButton />    
            {navState}

            
        </div>
    )
}

export default Nav


//there is an error when pressing any of the manga buttons more than once. we need to somehow make pressing the manga buttons the same as pressing the anime buttons. the difference happens to be with the extra state setter in the mangabutton 

//make a state for the navbar and change that state with the click of a button. 
