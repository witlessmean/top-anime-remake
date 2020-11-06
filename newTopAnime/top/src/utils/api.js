import axios from 'axios';

 const apiData = axios.create({

    baseURL: "https://jikan1.p.rapidapi.com/top/", 
    headers: {
          "x-rapidapi-host": "jikan1.p.rapidapi.com",
          "x-rapidapi-key": "0767895010msh54d58c2957b8672p1849dejsnc7c9578ed374"
      }
  });

  export default apiData