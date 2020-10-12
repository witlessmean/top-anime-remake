import React from 'react'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";
import appStyles from "./appStyles.module.css";
import animeContainer from "./components/AnimeContainer";
import aniData from './utils/api';

const App = () => {
  
      const [pics, setPics] = useState([])

    useEffect(() => {
    
    aniData.get("/anime/1/airing").then((anime) => {
      console.log(anime.data.top)
    
        setPics(anime)
    
    }).catch((error) => {
      console.log(console.log(error))
    })
    
    return () => {
        console.log('cleanup in useEffect')
      }
    }, [])
  return (
    <div>
           
           
             {/* {pic.map((topPic) => {
        return <img src={topPic.image_url} key={uuidv4()} />;
      })}  */}
    </div>
  )
}

export default App

