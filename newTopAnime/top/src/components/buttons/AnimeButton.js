import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <NavLink to="/"><button type="button" onClick={() => {
            setNavState(<AnimeInputs/>)
            }}>Anime</button></NavLink>

        </div>

    )
}

export default AnimeButton
