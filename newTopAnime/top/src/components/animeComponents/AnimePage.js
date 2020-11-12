import React, { useContext } from 'react'
import { CurrentAnimePicsContext } from '../../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { StyledContainer, StyledInfoContainer ,Wrapper } from '../../reusableStyles'
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const AnimePage = () => {

const { currentAnimePics } = useContext(CurrentAnimePicsContext);

console.log(currentAnimePics)
   


return (
        <Wrapper>
                    {currentAnimePics.map((topPic) => {
          return  <StyledContainer key={uuidv4()}> <div><img src={topPic.image_url} alt='animeImg'/></div><StyledInfoContainer><div>{topPic.rank}</div><div>{topPic.score}{ topPic.score > 7 ? <MoodIcon fontSize="large" style={{color: '#33b849'}} /> : <MoodBadIcon fontSize="large" style={{color: '#de3333'}} /> }</div> <div><a href={topPic.url}>{topPic.title}</a></div><div>{topPic.start_date}</div><div>{topPic.episodes}</div></StyledInfoContainer> </StyledContainer> ;
        })}
        </Wrapper>
    )
}

export default AnimePage


