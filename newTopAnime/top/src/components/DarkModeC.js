import React, { useContext, useState, useEffect } from 'react'
import { MoonIcon, SunIcon, MobileMoonIcon, MobileSunIcon } from '../reusableStyles';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';
import { ModeContext } from '../contexts/ModeContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { device } from '../utils/mediaBreakPoints';

// export const SunIcon = withStyles({
  
//     root: {
//       fontSize: '4rem',
//       marginRight: '0.2em',
//       color: '#f7f7f7'
//     }
//   })(WbSunnyIcon);
  
//   export const MoonIcon = withStyles({
//     root: {
//       fontSize: '4rem',
//       color: '#f7f7f7'
//     }
//   })(Brightness3Icon);

const DarkModeContainer = styled.div`
    display: flex; 
    align-items: center; 
    position: absolute; 
    @media ${device.mobileS}{ 
        flex-direction: column;
        right: 0.5em;
        top: 1.5em;
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
            if((matches === true) && (mode === false)){
                setMobileIcon(<MobileMoonIcon />) 
            }else if((matches === true) && (mode === true)){
                setMobileIcon(<MobileSunIcon />) 
            }else {
                setMobileIcon('')
            } 
            //console.log(`mode: ${mode}`, `matches: ${matches}`)
            return () => {
        }
}, [matches, mode])
    
    return (
           
           <DarkModeContainer>
               {mobileIcon}
    { matches === true ? '' : <SunIcon /> }  
                <Switch onChange={onCheckboxChange} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} checked={mode} />
    { matches === true ? '' : <MoonIcon /> }  
            </DarkModeContainer>
    )
}

export default DarkModeC
