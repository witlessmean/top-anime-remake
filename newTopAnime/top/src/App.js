import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import appStyles from "./appStyles.module.css";
import animeContainer from "./components/AnimeContainer";
import Nav from "./components/Nav"
import apiData from "./utils/api";
import { AnimeUrlContext } from "./contexts/AnimeUrlContext";
import { MangaUrlContext } from "./contexts/MangaUrlContext";
import { MangaDataContext } from "./contexts/MangaDataContext";

const App = () => {
  
  const [currentPics, setCurrentPics] = useState([])
  const [animeUrl, setAnimeUrl] = useState("airing");
  const [mangaUrl, setMangaUrl] = useState("manga");
  const [mangaData, setMangaData] = useState([])

  useEffect(() => {
    apiData
      .get(`/anime/1/${animeUrl}`)
      .then((anime) => {
        setCurrentPics(anime.data.top)
        
      })
      .catch((error) => {
        console.log(console.log(error));
      });

    return () => {
      console.log("cleanup in useEffect");
    };
  }, [animeUrl]);
  
  useEffect(() => {
    apiData
      .get(`/manga/1/${mangaUrl}`)
      .then((manga) => {
        setMangaData(manga.data.top)
      })
      .catch((error) => {
        console.log(console.log(error));
      });

    return () => {
      console.log("cleanup in useEffect");
    };
  }, [mangaUrl]);
  
  
  return (
    <div>
      <AnimeUrlContext.Provider value={{ animeUrl, setAnimeUrl }}>
        <MangaUrlContext.Provider value={{mangaUrl, setMangaUrl}}>
        <MangaDataContext.Provider value={{mangaData, setMangaData}}>
        <Nav style={{margin: 100}} />
        {currentPics.map((topPic) => {
          return <img src={topPic.image_url} key={uuidv4()} />;
        })}
      </MangaDataContext.Provider>
      </MangaUrlContext.Provider>
      </AnimeUrlContext.Provider>
    </div>
  );
};

export default App;

//We have the data we need inside of the nav, now we need to work on the funtionality of the button. 