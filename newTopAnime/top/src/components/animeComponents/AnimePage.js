import React, { useContext, useState, useEffect } from 'react'
import MobileReveal from '../buttons/MobileReveal';
import { CurrentAnimePicsContext } from '../../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { StyledContainer, StyledInfoContainer ,Wrapper } from '../../reusableStyles'
import { CustomTooltip, GoodMoodIcon, BadMoodIcon } from '../../reusableStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useSpring, animated} from 'react-spring';
import {device} from '../../utils/mediaBreakPoints';


const AnimePage = () => {
  
const { currentAnimePics } = useContext(CurrentAnimePicsContext);
const springProps = useSpring({opacity: 1, from: {opacity: 0}});
//simple way to integrate styled-components with animated from react-spring
const AnimatedWrapper = animated(Wrapper);
const AnimatedStyledContainer = animated(StyledContainer);
const matchesMobileSmall = useMediaQuery(device.mobileS);
const matchesMobileTablet = useMediaQuery(device.tablet);
const [springState, setSpringState] = useState([]);

useEffect(() => {
  const abortController = new AbortController();
  
  setSpringState(springProps);
  
  return () => {
    abortController.abort()
  }
}, [])


const mobileRevealFunc = () => {
  if(matchesMobileSmall){
    return <MobileReveal />
  }else if(matchesMobileTablet){
    return undefined;
  }
}

return (
       
        <Wrapper>
                  {currentAnimePics.map((topPic) => {
          return  <AnimatedStyledContainer style={springState} key={uuidv4()}> <div><img src={topPic.image_url} alt='animeImg'/></div><StyledInfoContainer><div>rank:{topPic.rank}</div><div>rating:    {topPic.score}{ topPic.score > 7 ? <GoodMoodIcon /> : <BadMoodIcon/> }</div> <div> <CustomTooltip title="myanimelist link" placement="right"><a target="_blank" rel="noopener noreferrer" href={topPic.url}>{topPic.title}</a></CustomTooltip></div><div>{topPic.start_date}</div>{topPic.episodes > 0 ? <div>episodes: {topPic.episodes}</div> : <div>episodes: unknown</div>  }<div>type: {topPic.type}</div></StyledInfoContainer> </AnimatedStyledContainer> ;
        })}
        </Wrapper>
          
    )
}

export default AnimePage



