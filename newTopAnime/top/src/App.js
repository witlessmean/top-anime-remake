import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Nav from "./components/Nav"
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
import { ModeContext } from './contexts/ModeContext';
import LoadingCircle from './components/LoadingCircle';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import apiData from "./utils/api";

//global styles including custom scrollbar. 
const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
 
 body { 
  ::-webkit-scrollbar {
    width: 1vw;
}

::-webkit-scrollbar-track {
  background: #eae7dc; 
  border: 1px solid #aeaeb5
}
::-webkit-scrollbar-thumb {
  background: #eae7dc;
  border-radius: 10px;
  border: 1px solid #aeaeb5
}

::-webkit-scrollbar-thumb:active {
  background: #aeaeb5
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

//conditional styling for darkmode. I receive mode props from the material UI theme which wraps the app. 
    background-color: ${ (props) => {
            return props.theme.mode === true ? '#181818' : '#eae7dc'
    } 
      };
    color: ${ (props) => {
            return props.theme.mode === true ? 'white' : 'black'
    } 
      };
   a { color: ${ (props) => {
            return props.theme.mode === true ? '#f5faf6 !important' : 'black'
    } 
      } 
        };
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }
  `
const getInitialTheme  = () => {
  const savedTheme = storage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false 
}

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
  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    const animePromise = apiData.get(`/anime/1/${animeUrl}`);
    const mangaPromise = apiData.get(`/manga/1/${mangaUrl}`);
    const abortController = new AbortController();
    const signal = abortController.signal
    
    setLoading(true);
      
    Promise.all([animePromise, mangaPromise], {signal}).then((promiseContent) =>
     {
          setAnimeData(promiseContent[0].data.top);
          setMangaData(promiseContent[1].data.top);
          setCurrentAnimePics(promiseContent[0].data.top);
          setCurrentMangaPics(promiseContent[1].data.top);

        setLoading(false); 
      }).catch((error) => {
        console.log('error in fetching api content', error)
      })

    return () => {
      abortController.abort();
    }
  }, [animeUrl, mangaUrl])

useEffect(() => {
  const abortController = new AbortController();
  storage.setItem('theme', JSON.stringify(mode))
  return () => {
    abortController.abort();
  }
}, [mode]);
//The theme provider from material-ui is the way that I can actually add the mode props
  return (
    <>
      <Router>
        <ThemeProvider theme={{mode}}>
      <ModeContext.Provider value={{mode, setMode}}>
      <GlobalStyle />
     <CurrentAnimePicsContext.Provider value={{currentAnimePics,setCurrentAnimePics}}>
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
      </ModeContext.Provider>
    </ThemeProvider>
    </Router>
    </>
  );
};

export default App;


