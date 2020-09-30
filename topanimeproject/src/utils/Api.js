import React from 'react';
import axios from 'axios';

 const aniData = axios.create({

    baseURL: "https://jikan1.p.rapidapi.com/top/", 
    headers: {
          "x-rapidapi-host": "jikan1.p.rapidapi.com",
          "x-rapidapi-key": "0767895010msh54d58c2957b8672p1849dejsnc7c9578ed374"
      }
  });

  export default aniData


  //finish creating instance. we will use this instance inside of components that need the api. this should mean that there will be eight components considering the amount of api calls, and each one of those should be structurally quite similar. We will Likely use context so they can receive the swipers. Maybe we actually used styled components and export the component style considering they'll all be the same? 

