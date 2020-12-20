import React, {useState, useEffect, useContext} from 'react'
import { UpContext } from '../../contexts/UpContext';
import {UpIcon, DownIcon} from '../../reusableStyles';
import {IconButton} from '@material-ui/core';
import styled from 'styled-components';

const StyledMobileArrow = styled.div`
`

const MobileReveal = () => {
    
    const [arrowState, setArrowState] = useState(<UpIcon />)
    const [up, setUp] = useState(true);
    
    
    useEffect(()=>{
        if(up === true){
          setArrowState(<UpIcon />)
        }else if(up === false){
          setArrowState(<DownIcon />)
        } 
  }, [up]);

  return (
        <StyledMobileArrow>
    <IconButton onClick={() => up === true ? setUp(false) : setUp(true) } >
      {arrowState}
    </IconButton>
        </StyledMobileArrow>
    )
}


export default MobileReveal
