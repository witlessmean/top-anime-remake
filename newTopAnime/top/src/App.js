import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import appStyles from "./appStyles.module.css";
import animeContainer from "./components/AnimeContainer";
import Nav from "./components/Nav"
import aniData from "./utils/api";
import { UrlContext } from "./contexts/UrlContext";

const App = () => {
  const [pics, setPics] = useState([]);
  const [url, setUrl] = useState("airing");

  useEffect(() => {
    aniData
      .get(`/anime/1/${url}`)
      .then((anime) => {
        console.log(anime.data.top);

        setPics(anime.data.top);
      })
      .catch((error) => {
        console.log(console.log(error));
      });

    return () => {
      console.log("cleanup in useEffect");
    };
  }, []);
  return (
    <div>
      <UrlContext.Provider value={{ url, setUrl }}>
        <Nav style={{margin: 100}} />
        {pics.map((topPic) => {
          return <img src={topPic.image_url} key={uuidv4()} />;
        })}
      </UrlContext.Provider>
    </div>
  );
};

export default App;

//we have to make the url itself a dynamic state.

//what we need to do is create a state here, and then add that state to our dynamic url. Then pass that state to the nav so we can make the buttons there.



//the problem is that the useEffect doesn't rerender. add something to the dependency array or just run another useEffect.
