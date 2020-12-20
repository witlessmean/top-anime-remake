import React, { useContext, useState, useEffect } from 'react'
import { MobileMoonIcon, MobileSunIcon } from '../reusableStyles';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';
import { ModeContext } from '../contexts/ModeContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { device } from '../utils/mediaBreakPoints';

const DarkModeContainer = styled.div`
    display: flex; 
    align-items: center; 
    position: absolute; 
    @media ${device.mobileS}{ 
        flex-direction: column;
        right: 0em;
        top: 1em;
    }
    right: 2em;
    top: 2.2em;
     `

const DarkModeC = () => {
   
    const [mobileIcon, setMobileIcon] = useState('')
    const { mode, setMode } = useContext(ModeContext);
    const matches = useMediaQuery(device.mobileS);

    const onCheckboxChange = (e) => {
        setMode(e.target.checked)
        };
        
        useEffect(() => {
            const abortController = new AbortController();
            mode === false ? setMobileIcon(<MobileMoonIcon/>) : setMobileIcon(<MobileSunIcon/>)
      
            //console.log(`mode: ${mode}`, `matches: ${matches}`)
            return () => { abortController.abort()
        }
}, [matches, mode])
    
    return (
           
           <DarkModeContainer>
               {mobileIcon}
                <Switch onChange={onCheckboxChange} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} checked={mode} />
            </DarkModeContainer>
    )
}

export default DarkModeC
