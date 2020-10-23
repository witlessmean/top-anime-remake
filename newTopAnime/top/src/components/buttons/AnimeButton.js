import React, { useContext, useState } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <button type="button" onClick={() => {
              setNavState(<AnimeInputs/>)
            }}>Anime</button>

        </div>

    )
}

export default AnimeButton
