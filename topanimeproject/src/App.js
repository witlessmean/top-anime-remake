import React from "react";
import { topAirAni } from "./utils/Api";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";
import appStyles from "./appStyles.module.css";
import animeContainer from "./components/AnimeContainer";

function App() {
  
  const aniAPI = createContext()
  
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
