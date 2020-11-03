import React, { useContext } from 'react'
import { CurrentAnimePicsContext } from '../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from '../reusableStyles'


const AnimePage = () => {

const { currentAnimePics } = useContext(CurrentAnimePicsContext);

    return (
        <Wrapper>
                    {currentAnimePics.map((topPic) => {
          return <img src={topPic.image_url} alt='animeImg' key={uuidv4()} />;
        })}
        </Wrapper>
    )
}

export default AnimePage


