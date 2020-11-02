import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'

const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
           <NavLink to="/manga"> <button type="button" onClick={() => {
              setNavState(<MangaInputs/>)
            }}>Manga</button></NavLink>

        </div>

    )
}

export default MangaButton
