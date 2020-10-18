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
import { CurrentPicsContext } from "./contexts/CurrentPicsContext";

const App = () => {
  
  const [currentPics, setCurrentPics] = useState([])
  const [animeUrl, setAnimeUrl] = useState("airing");
  const [mangaUrl, setMangaUrl] = useState("manga");
  const [mangaData, setMangaData] = useState([])

  useEffect(() => {
    const animePromise = apiData.get(`/anime/1/${animeUrl}`);
    const mangaPromise = apiData.get(`/manga/1/${mangaUrl}`);

      Promise.all([animePromise, mangaPromise]).then((promiseContent) => {
          
          setCurrentPics(promiseContent[0].data.top);
          setMangaData(promiseContent[1].data.top);
      }).catch((error) => {
        console.log('error in fetching api content', error)
      })

    return () => {
      console.log('cleanup')
    }
  }, [animeUrl, mangaUrl])
  
  return (
    <div>
      <CurrentPicsContext.Provider value={{ currentPics, setCurrentPics }}>
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
      </CurrentPicsContext.Provider>
    </div>
  );
};

export default App;
