import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { GlobalStyle } from './reusableStyles'
import Nav from "./components/Nav"
import apiData from "./utils/api";
import AnimePage from './components/AnimePage';
import MangaPage from './components/MangaPage';
import { AnimeUrlContext } from "./contexts/AnimeUrlContext";
import { MangaUrlContext } from "./contexts/MangaUrlContext";
import { MangaDataContext } from "./contexts/MangaDataContext";
import { AnimeDataContext } from "./contexts/AnimeDataContext";
import { CurrentAnimePicsContext } from "./contexts/CurrentAnimePicsContext";
import { CurrentMangaPicsContext } from "./contexts/CurrentMangaPicsContext";
import { NavStateContext } from "./contexts/NavStateContext";

const App = () => {
  
  const [navState, setNavState] = useState([]);
  const [currentAnimePics, setCurrentAnimePics] = useState([]);
  const [currentMangaPics, setCurrentMangaPics] = useState([]);
  const [animeUrl, setAnimeUrl] = useState("airing");
  const [mangaUrl, setMangaUrl] = useState("manga");
  const [mangaData, setMangaData] = useState([]);
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const animePromise = apiData.get(`/anime/1/${animeUrl}`);
    const mangaPromise = apiData.get(`/manga/1/${mangaUrl}`);

      Promise.all([animePromise, mangaPromise]).then((promiseContent) => {
       
          setAnimeData(promiseContent[0].data.top);
          setMangaData(promiseContent[1].data.top);
          setCurrentAnimePics(promiseContent[0].data.top);
          setCurrentMangaPics(promiseContent[1].data.top)
      }).catch((error) => {
        console.log('error in fetching api content', error)
      })

    return () => {
      console.log('cleanup')
    }
  }, [animeUrl, mangaUrl])
    
  console.log(animeData)
  return (
      <>
      <GlobalStyle />
      <Router>
    <CurrentAnimePicsContext.Provider value={{ currentAnimePics,setCurrentAnimePics }}>
        <CurrentMangaPicsContext.Provider value={{currentMangaPics, setCurrentMangaPics}}>
      <NavStateContext.Provider value={{ navState, setNavState }}>
      <AnimeDataContext.Provider value={{ animeData, setAnimeData }}>
      <AnimeUrlContext.Provider value={{ animeUrl, setAnimeUrl }}>
        <MangaUrlContext.Provider value={{ mangaUrl, setMangaUrl }}>
        <MangaDataContext.Provider value={{ mangaData, setMangaData }}>
        <Nav style={{margin: 100}} />
        
        <Switch>
        <Route exact path="/"> <AnimePage/> </Route>
        <Route path="/manga"> <MangaPage/> </Route>
        </Switch>
        
      </MangaDataContext.Provider>
      </MangaUrlContext.Provider>
      </AnimeUrlContext.Provider>
      </AnimeDataContext.Provider>
      </NavStateContext.Provider>
      </CurrentMangaPicsContext.Provider>
      </CurrentAnimePicsContext.Provider>
    </Router>
    </>
  );
};

export default App;


