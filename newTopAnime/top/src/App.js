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
import { ChosenOptionContext } from './contexts/ChosenOptionContext';
import ChosenOption from './components/ChosenOption';
import CircularProgress from '@material-ui/core/CircularProgress';




const App = () => {
  const log = console.log
  const [navState, setNavState] = useState(undefined);
  const [currentAnimePics, setCurrentAnimePics] = useState([]);
  const [currentMangaPics, setCurrentMangaPics] = useState([]);
  const [animeUrl, setAnimeUrl] = useState("airing");
  const [mangaUrl, setMangaUrl] = useState("manga");
  const [mangaData, setMangaData] = useState([]);
  const [animeData, setAnimeData] = useState([]);
  const [option, setOption] = useState('');
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
    
  
  return (
      <>
      <GlobalStyle />
      <Router>
    <CurrentAnimePicsContext.Provider value={{ currentAnimePics,setCurrentAnimePics }}>
        <CurrentMangaPicsContext.Provider value={{currentMangaPics, setCurrentMangaPics}}>
      <ChosenOptionContext.Provider value={{option, setOption}}>  
      <NavStateContext.Provider value={{ navState, setNavState }}>
      <AnimeDataContext.Provider value={{ animeData, setAnimeData }}>
      <AnimeUrlContext.Provider value={{ animeUrl, setAnimeUrl }}>
        <MangaUrlContext.Provider value={{ mangaUrl, setMangaUrl }}>
        <MangaDataContext.Provider value={{ mangaData, setMangaData }}>
        <Nav style={{margin: 100}} />
        <Switch>
        <Route exact path="/"> { loading == true ? <CircularProgress>Loading....</CircularProgress> : <AnimePage/>} </Route>
        <Route path="/manga"> { loading == true ? <CircularProgress>Loading....</CircularProgress> : <MangaPage/>} </Route>
        </Switch>
      </MangaDataContext.Provider>
      </MangaUrlContext.Provider>
      </AnimeUrlContext.Provider>
      </AnimeDataContext.Provider>
      </NavStateContext.Provider>
      </ChosenOptionContext.Provider>
      </CurrentMangaPicsContext.Provider>
      </CurrentAnimePicsContext.Provider>
    </Router>
    </>
  );
};

export default App;


