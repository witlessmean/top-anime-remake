import React, { useContext } from 'react'
import { CurrentAnimePicsContext } from '../../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { StyledContainer, StyledInfoContainer ,Wrapper } from '../../reusableStyles'
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { CustomTooltip } from '../../reusableStyles';




const AnimePage = () => {

const { currentAnimePics } = useContext(CurrentAnimePicsContext);

return (
        <Wrapper>
                    {currentAnimePics.map((topPic) => {
          return  <StyledContainer key={uuidv4()}> <div><img src={topPic.image_url} alt='animeImg'/></div><StyledInfoContainer><div>rank:  {topPic.rank}</div><div>{topPic.score}{ topPic.score > 7 ? <MoodIcon fontSize="large" style={{color: '#33b849'}} /> : <MoodBadIcon fontSize="large" style={{color: '#de3333'}} /> }</div> <div> <CustomTooltip title="myanimelist link" placement="right"><a target="_blank" rel="noopener noreferrer" href={topPic.url}>{topPic.title}</a></CustomTooltip></div><div>{topPic.start_date}</div>{topPic.episodes > 0 ? <div>episodes: {topPic.episodes}</div> : <div>episodes: unknown</div> }</StyledInfoContainer> </StyledContainer> ;
        })}
        </Wrapper>
    )
}

export default AnimePage

//i think make the map as a utility function, and then move it to the utils folder and import it here. don't know whether or not to make it as a component. Then we NEED to try and break this map up into smaller pieces. 

