import React, { useContext } from 'react'
import { CurrentAnimePicsContext } from '../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";

const AnimePage = () => {

const { currentAnimePics, setCurrentAnimePics } = useContext(CurrentAnimePicsContext);

    return (
        <div>
                    {currentAnimePics.map((topPic) => {
          return <img src={topPic.image_url} key={uuidv4()} />;
        })}
        </div>
    )
}

export default AnimePage


