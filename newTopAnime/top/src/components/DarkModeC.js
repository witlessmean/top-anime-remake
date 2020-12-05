import React, { useContext } from 'react'
import { MoonIcon, SunIcon } from '../reusableStyles';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';
import { ModeContext } from '../contexts/ModeContext';



const DarkModeContainer = styled.div`
    display: flex; 
    align-items: center; 
    position: absolute; 
    right: 2em;
    top: 2.2em;
     `

const DarkModeC = () => {
   
    const { mode, setMode } = useContext(ModeContext);

    const onCheckboxChange = (e) => {
        setMode(e.target.checked)
        }
        console.log(mode);

    return (
            <DarkModeContainer>
                <SunIcon />
                
                
                <Switch onChange={onCheckboxChange} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} checked={mode} />
                <MoonIcon />
            </DarkModeContainer>
    )
}

export default DarkModeC
