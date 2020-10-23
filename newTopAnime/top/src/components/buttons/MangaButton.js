import React, { useContext, useState } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'

const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <button type="button" onClick={() => {
              setNavState(<MangaInputs/>)
            }}>Manga</button>

        </div>

    )
}

export default MangaButton
