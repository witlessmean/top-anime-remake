import React, { useContext } from 'react'
import { CurrentMangaPicsContext } from '../contexts/CurrentMangaPicsContext';
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from '../reusableStyles';

const MangaPage = () => {

const { currentMangaPics } = useContext(CurrentMangaPicsContext);

    return (
        <Wrapper>
                    {currentMangaPics.map((topPic) => {
          return <img src={topPic.image_url} alt='mangaImg' key={uuidv4()} />;
        })}
        </Wrapper>
    )
}

export default MangaPage