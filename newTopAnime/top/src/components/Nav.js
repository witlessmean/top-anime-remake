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


 
