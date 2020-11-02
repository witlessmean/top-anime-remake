import React, { useContext } from 'react'
import { CurrentMangaPicsContext } from '../contexts/CurrentMangaPicsContext';
import { v4 as uuidv4 } from "uuid";

const MangaPage = () => {

const { currentMangaPics, setCurrentMangaPics } = useContext(CurrentMangaPicsContext);

    return (
        <div>
                    {currentMangaPics.map((topPic) => {
          return <img src={topPic.image_url} key={uuidv4()} />;
        })}
        </div>
    )
}

export default MangaPage