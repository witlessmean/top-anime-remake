import React from 'react';
import axios from 'axios';

 const instance = axios.create({

    headers: {
          "x-rapidapi-host": "jikan1.p.rapidapi.com",
          "x-rapidapi-key": "0767895010msh54d58c2957b8672p1849dejsnc7c9578ed374"
      }
  });

  export default instance

