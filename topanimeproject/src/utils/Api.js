import axios from "axios";
import { useEffect } from "react";

// const topAirAni =
//   axios.create({
//     baseURL: "https://jikan1.p.rapidapi.com/",
//     headers: {
//       "x-rapidapi-host": "jikan1.p.rapidapi.com",
//       "x-rapidapi-key": "0767895010msh54d58c2957b8672p1849dejsnc7c9578ed374",
//     },
//   });

//   export { topAirAni }



//a=airing, p=upcoming




const Api = () => {
    
    
    let uAnime = "https://jikan1.p.rapidapi.com/top/anime/1/upcoming";
let uManga = "https://jikan1.p.rapidapi.com/top/manga/1/upcoming";
let uPeople = "https://jikan1.p.rapidapi.com/top/people/1/upcoming";
let uCharacters = "https://jikan1.p.rapidapi.com/top/characters/1/upcoming";

let aAnime = "https://jikan1.p.rapidapi.com/top/anime/1/airing";
let aManga = "https://jikan1.p.rapidapi.com/top/manga/1/airing";
let aPeople = "https://jikan1.p.rapidapi.com/top/people/1/airing";
let aCharacters = "https://jikan1.p.rapidapi.com/top/characters/1/airing";

const req_uAnime = axios.get(uAnime);
const req_uManga = axios.get(uManga);
const req_uPeople = axios.get(uPeople);
const req_uCharacters = axios.get(uCharacters);
const req_aAnime = axios.get(aAnime);
const req_aManga = axios.get(aManga);
const req_aPeople = axios.get(aPeople);
const req_aCharacters = axios.get(aCharacters);
    
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
    
    return (
        <div>
            
        </div>
    )
}

export default Api
