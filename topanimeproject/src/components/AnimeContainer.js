import React from 'react';
import { useState, useEffect } from 'react';
import aniData from "../utils/api";
import animeContainerStyles from "./animeContainerStyles.module.css";



const AnimeContainer = () => {
   
    const [pics, setPics] = useState([])

    useEffect(() => {
    
    aniData.get("/anime/1/airing").then((anime) => {
      console.log(anime)
    
        setPics(anime)
    
    }).catch((error) => {
      console.log(console.log(error))
    })
    
    return () => {
        console.log('cleanup in useEffect')
      }
    }, [])
   
    return (
        <>
            
        </>
    )
}

export default AnimeContainer