import React, {useState, useEffect, useContext} from 'react'
import { UpContext } from '../../contexts/UpContext';
import {UpIcon, DownIcon} from '../../reusableStyles';
import {IconButton} from '@material-ui/core';
import styled from 'styled-components';

const StyledMobileArrow = styled.div`
`

const MobileReveal = () => {
    
    const [arrowState, setArrowState] = useState(<UpIcon />)
    const {up, setUp} = useContext(UpContext);
    
    
    useEffect(()=>{
        
        const abortController = new AbortController();
        
        
        if(up === true){
          setArrowState(<UpIcon />)
        }else if(up === false){
          setArrowState(<DownIcon />)
        } 
        
        return function cleanup(){
            abortController.abort();
        }
  }, [up]);

  console.log(up)

  return (
        <StyledMobileArrow>
    <IconButton onClick={() => up === true ? setUp(false) : setUp(true) } >
      {arrowState}
    </IconButton>
        </StyledMobileArrow>
    )
}


export default MobileReveal
