import React, { useContext, useState, useEffect } from 'react'
import MobileReveal from '../buttons/MobileReveal';
import { CurrentAnimePicsContext } from '../../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { StyledContainer, StyledInfoContainer ,Wrapper } from '../../reusableStyles'
import { CustomTooltip, GoodMoodIcon, BadMoodIcon } from '../../reusableStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSpring, animated } from 'react-spring';
import { device } from '../../utils/mediaBreakPoints';
import styled, { ThemeProvider } from 'styled-components';



const AnimePage = () => {
  
const { currentAnimePics } = useContext(CurrentAnimePicsContext);
//simple way to integrate styled-components with animated from react-spring
const AnimatedWrapper = animated(Wrapper);
const AnimatedStyledContainer = animated(StyledContainer);
const matchesMobileSmall = useMediaQuery(device.mobileS);
const matchesMobileTablet = useMediaQuery(device.tablet);
const [springState, setSpringState] = useState([]);
//parentUp is made simply in order to communicate with the 'up state' from the MobileReveal child. 'up' can not be global OR be passed from here to <MobileReveal/> because all the arrows will change at once when clicked instead of just the one that is clicked. 
const [parentUp, setParentUp] = useState(true);
const springProps = useSpring({opacity: 1, from: {opacity: 0}});

useEffect(() => {
  const abortController = new AbortController();
  
  setSpringState(springProps);
  
  return () => {
    abortController.abort()
  }
}, [])

// responsive function utilizing useMediaQuery to conditionally render MobileReveal component. 

const reveal = () => {
  if(matchesMobileSmall && !matchesMobileTablet){
    return (
    
    <MobileReveal parentUp={parentUp} setParentUp={setParentUp} />
    
    );
  }else {
    return null;
  }
}



return (
       <ThemeProvider theme={{parentUp}}>
        <Wrapper>
                  {currentAnimePics.map((topPic) => {
          return  <AnimatedStyledContainer style={springState} key={uuidv4()}> 
          {reveal()} <div><img src={topPic.image_url} alt='animeImg'/></div><StyledInfoContainer style={{visibility: parentUp === true ? 'hidden' : 'visible'}} ><div>rank:{topPic.rank}</div><div>rating:    {topPic.score}{ topPic.score > 7 ? <GoodMoodIcon /> : <BadMoodIcon/> }</div> <div> <CustomTooltip title="myanimelist link" placement="right"><a target="_blank" rel="noopener noreferrer" href={topPic.url}>{topPic.title}</a></CustomTooltip></div><div>{topPic.start_date}</div>{topPic.episodes > 0 ? <div>episodes: {topPic.episodes}</div> : <div>episodes: unknown</div>  }<div>type: {topPic.type}</div></StyledInfoContainer> </AnimatedStyledContainer> ;
        })}
        </Wrapper>
        </ThemeProvider>  
    )
}

export default AnimePage



