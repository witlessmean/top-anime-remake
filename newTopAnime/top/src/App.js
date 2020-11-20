import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { GlobalStyle } from './reusableStyles'
import Nav from "./components/Nav"
import apiData from "./utils/api";
import AnimePage from './components/animeComponents/AnimePage';
import MangaPage from './components/mangaComponents/MangaPage';
import { AnimeUrlContext } from "./contexts/AnimeUrlContext";
import { MangaUrlContext } from "./contexts/MangaUrlContext";
import { MangaDataContext } from "./contexts/MangaDataContext";
import { AnimeDataContext } from "./contexts/AnimeDataContext";
import { CurrentAnimePicsContext } from "./contexts/CurrentAnimePicsContext";
import { CurrentMangaPicsContext } from "./contexts/CurrentMangaPicsContext";
import { NavStateContext } from "./contexts/NavStateContext";
import { ChosenAniOptionContext } from './contexts/ChosenAniOptionContext';
import { ChosenMangaOptionContext } from './contexts/ChosenMangaOptionContext';
import { AniOpenContext } from './contexts/AniOpenContext';
import { MangaOpenContext } from './contexts/MangaOpenContext';
import LoadingCircle from './components/LoadingCircle';



const App = () => {
  const [navState, setNavState] = useState([]);
  const [currentAnimePics, setCurrentAnimePics] = useState([]);
  const [currentMangaPics, setCurrentMangaPics] = useState([]);
  const [animeUrl, setAnimeUrl] = useState("airing");
  const [mangaUrl, setMangaUrl] = useState("manga");
  const [mangaData, setMangaData] = useState([]);
  const [animeData, setAnimeData] = useState([]);
  const [chosenAniOption, setChosenAniOption] = useState('Airing');
  const [chosenMangaOption, setChosenMangaOption] = useState('Manga');
  const [aniOpen, setAniOpen] = useState(undefined);
  const [mangaOpen, setMangaOpen] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const animePromise = apiData.get(`/anime/1/${animeUrl}`);
    const mangaPromise = apiData.get(`/manga/1/${mangaUrl}`);

      Promise.all([animePromise, mangaPromise]).then((promiseContent) => {
      
          setAnimeData(promiseContent[0].data.top);
          setMangaData(promiseContent[1].data.top);
          setCurrentAnimePics(promiseContent[0].data.top);
          setCurrentMangaPics(promiseContent[1].data.top)

          setLoading(false)
      }).catch((error) => {
        console.log('error in fetching api content', error)
      })

    return () => {
      console.log('cleanup')
    }
  }, [animeUrl, mangaUrl])
  console.log(aniOpen, mangaOpen)
  return (
      <>
      <GlobalStyle />
      <Router>
    <CurrentAnimePicsContext.Provider value={{ currentAnimePics,setCurrentAnimePics }}>
        <CurrentMangaPicsContext.Provider value={{currentMangaPics, setCurrentMangaPics}}>
      <AniOpenContext.Provider value={{aniOpen, setAniOpen}} >
      <MangaOpenContext.Provider value={{mangaOpen, setMangaOpen}}>
      <ChosenAniOptionContext.Provider value={{chosenAniOption, setChosenAniOption}}>  
      <ChosenMangaOptionContext.Provider value={{chosenMangaOption, setChosenMangaOption}}>
      <NavStateContext.Provider value={{ navState, setNavState }}>
      <AnimeDataContext.Provider value={{ animeData, setAnimeData }}>
      <AnimeUrlContext.Provider value={{ animeUrl, setAnimeUrl }}>
        <MangaUrlContext.Provider value={{ mangaUrl, setMangaUrl }}>
        <MangaDataContext.Provider value={{ mangaData, setMangaData }}>
        <Nav style={{margin: 100}} />
        <Switch>
        <Route exact path="/"> { loading === true ? <LoadingCircle>Loading....</LoadingCircle> : <AnimePage/>} </Route>
        <Route path="/manga"> { loading === true ? <LoadingCircle>Loading....</LoadingCircle> : <MangaPage/>} </Route>
        </Switch>
      </MangaDataContext.Provider>
      </MangaUrlContext.Provider>
      </AnimeUrlContext.Provider>
      </AnimeDataContext.Provider>
      </NavStateContext.Provider>
      </ChosenMangaOptionContext.Provider>
      </ChosenAniOptionContext.Provider>
      </MangaOpenContext.Provider>
      </AniOpenContext.Provider>
      </CurrentMangaPicsContext.Provider>
      </CurrentAnimePicsContext.Provider>
    </Router>
    </>
  );
};

export default App;


