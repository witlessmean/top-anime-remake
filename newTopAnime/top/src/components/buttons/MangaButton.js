import React, { useContext } from 'react';
import {NavStateContext} from '../../contexts/NavStateContext';
import MangaInputs from './MangaInputs'
import Button from '@material-ui/core/Button';
import { StyledNavLink } from '../../reusableStyles';

const MangaButton = () => {
    
const { navState, setNavState } = useContext(NavStateContext);



return (
        
        <div>
            <StyledNavLink to="/manga" style={{marginLeft: '10%'}} ><Button type="button"  style={{width: '5vw', height: '2.5em', fontSize: '1.6rem', fontWeight: 'bolder'}} size="large" variant="contained" color="primary"  onClick={() => {
              setNavState(<MangaInputs/>)
            }}>Manga</Button></StyledNavLink>

        </div>

    )
}

export default MangaButton
