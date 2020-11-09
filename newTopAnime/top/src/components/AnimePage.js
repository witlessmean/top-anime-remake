import React, { useContext } from 'react'
import { CurrentAnimePicsContext } from '../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { StyledContainer, Wrapper } from '../reusableStyles'

const AnimePage = () => {

const { currentAnimePics } = useContext(CurrentAnimePicsContext);

console.log(currentAnimePics)
    


return (
        <Wrapper>
                    {currentAnimePics.map((topPic) => {
          return  <StyledContainer key={uuidv4()}> <div><img src={topPic.image_url} alt='animeImg'/></div> <div>{topPic.title}</div> </StyledContainer> ;
        })}
        </Wrapper>
    )
}

export default AnimePage


