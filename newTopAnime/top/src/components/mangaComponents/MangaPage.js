import React, { useContext } from 'react'
import { CurrentMangaPicsContext } from '../../contexts/CurrentMangaPicsContext';
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from '../../reusableStyles';
import {useSpring, animated} from 'react-spring';

const MangaPage = () => {

const { currentMangaPics } = useContext(CurrentMangaPicsContext);
const springProps = useSpring({opacity: 1, from: {opacity: 0}})
//simple way to integrate styled-components with animated from react-spring
const AnimatedWrapper = animated(Wrapper)
  
return (
        <AnimatedWrapper style={springProps}>
                    {currentMangaPics.map((topPic) => {
          return <img src={topPic.image_url} alt='mangaImg' key={uuidv4()} />;
        })}
        </AnimatedWrapper>
    )
}

export default MangaPage