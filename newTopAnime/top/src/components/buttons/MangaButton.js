import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'
import Button from '@material-ui/core/Button';

const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <NavLink to="/manga" style={{textDecoration: 'none', marginLeft: '10%'}} ><Button type="button"  style={{width: '5vw', height: '2.5em', fontSize: '1.6rem', fontWeight: 'bolder'}} size="large" variant="contained" color="primary"  onClick={() => {
              setNavState(<MangaInputs/>)
            }}>Manga</Button></NavLink>

        </div>

    )
}

export default MangaButton
