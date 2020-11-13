import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {NavStateContext} from '../../contexts/NavStateContext';
import AnimeInputs from './AnimeInputs'
import Button from '@material-ui/core/Button';
import { StyledNavLink } from '../../reusableStyles';

const AnimeButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <StyledNavLink to="/" ><Button type="button" style={{width: '5vw', height: '2.5em', fontSize: '1.6rem', fontWeight: 'bolder'}} variant="contained" color="primary" onClick={() => {
            setNavState(<AnimeInputs/>)
            }}>Anime</Button></StyledNavLink>

        </div>

    )
}

export default AnimeButton
