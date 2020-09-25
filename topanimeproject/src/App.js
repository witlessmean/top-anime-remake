import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";
import appStyles from "./appStyles.module.css";
import animeContainer from "./components/AnimeContainer";
import instance from './utils/api';

function App() {
  

let uAnime = "https://jikan1.p.rapidapi.com/top/anime/1/upcoming";
let uManga = "https://jikan1.p.rapidapi.com/top/manga/1/upcoming";
let uPeople = "https://jikan1.p.rapidapi.com/top/people/1/upcoming";
let uCharacters = "https://jikan1.p.rapidapi.com/top/characters/1/upcoming";

let aAnime = "https://jikan1.p.rapidapi.com/top/anime/1/airing";
let aManga = "https://jikan1.p.rapidapi.com/top/manga/1/airing";
let aPeople = "https://jikan1.p.rapidapi.com/top/people/1/airing";
let aCharacters = "https://jikan1.p.rapidapi.com/top/characters/1/airing";

const req_uAnime = instance.get(uAnime);
const req_uManga = instance.get(uManga);
const req_uPeople = instance.get(uPeople);
const req_uCharacters = instance.get(uCharacters);
const req_aAnime = instance.get(aAnime);
const req_aManga = instance.get(aManga);
const req_aPeople = instance.get(aPeople);
const req_aCharacters = instance.get(aCharacters);



useEffect(() => {

  axios
    .all([req_uAnime, req_uManga, req_uPeople, req_uCharacters, req_aAnime, req_aManga, req_aPeople, req_aCharacters])
    .then(
        axios.spread((...responses) => {
          const uAnimeRes = responses[0];
          const uMangaRes = responses[1];
          const uPeopleRes = responses[2];
          const uCharactersRes = responses[3];
          const aAnimeRes = responses[4];
          const aMangaRes = responses[5];
          const aPeopleRes = responses[6];
          const aCharactersRes = responses[7];
    
          console.log(uAnimeRes)
    
        })
    )
    .catch((errors) => {
      console.log('Error in API call:', errors)
    }); 
    return () => {
        console.log("cleanup in api useEffect");
      };
    
},[])
  
  const [pic, setPic] = useState([]);


  return (
    <div>
      {/* {pic.map((topPic) => {
        return <img src={topPic.image_url} key={uuidv4()} />;
      })} */}
    </div>
  );
}

export default App;
