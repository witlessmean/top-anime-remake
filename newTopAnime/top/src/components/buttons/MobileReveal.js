import React, { useState, useEffect, useContext, createContext } from 'react'
import { UpIcon, DownIcon } from '../../reusableStyles';
import { IconButton } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import MobileInfoTextReveal from './MobileInfoTextReveal';

const StyledMobileArrow = styled.div`
position: absolute;
text-align: center;
bottom: 0;
background-color: rgba(0, 0, 0, 0.6);
height: ${ (props) => {
  return props.theme.up === true ? '16% ' : '100% '
} 
  };
//not sure whether or not to use this
/* transform: ${(props) => props.theme.up ? 'rotate(0deg)' : 'rotate(360deg)'};
  transition: transform .3s ease-out; */
width: 100%;
`


//parentUp props is how I can communicate up to the parent. 
const MobileReveal = ({parentUp, setParentUp}) => {
    
    const [arrowState, setArrowState] = useState(<UpIcon />)
    const [up, setUp] = useState(true);
    
 //code that simply writes all of this without a promise into one useEffect will cause a memory leak. For example, if I were to write  if(up === true) setUpIcon and setParentUp to up right after that, the parent would not actually know what up was yet. So I use a promise to make sure the operation happens. nestedOp stands for nestedOperation. 
  const nestedOp = () => {
  if(up === true){
    setArrowState(<UpIcon />);
  }else if(up === false){
    setArrowState(<DownIcon />)
  } 
 }

 const parentOp = () => {
   if(up === true){
     setParentUp(true)
   }else if(up === false){
     setParentUp(false)
   }
 }
 

 useEffect(() => {
  
(new Promise(nestedOp)).then(parentOp)

  return () => {
    
  }
}, [up]);






return (

  <ThemeProvider theme={{up}}>
    
    <StyledMobileArrow>
      <IconButton style={{position: 'absolute', bottom: '-27px'}} onClick={() => up ? setUp(false) : setUp(true) } >
      <MobileInfoTextReveal />
      {arrowState}
      </IconButton>
    </StyledMobileArrow>
  </ThemeProvider>
     
    )
}


export default MobileReveal




