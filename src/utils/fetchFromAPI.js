import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'  //cut the 'search/' from here and pass it as user input text on clicking menu - ((url) passing in fetchFromAPI function call)

const options = {
  // method: 'GET', //we don't need to specify the GET request, because weare going to do that using Axios.
  //and removed 'url' from options object, because we editing the url and took it outside into a variable
  params: {
    maxResults: '50', //keep only this params and remove others
  },
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY, //we have to safely store it in environment variables
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  //destructure the data object from the response

  return data; 
}
//this fetchFromAPI is called useEffect in Feed component