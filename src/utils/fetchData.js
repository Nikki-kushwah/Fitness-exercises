export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6d39a8ab48msh53e5371cf3f7f2ep1430fajsn35b0f4caddfd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "6d39a8ab48msh53e5371cf3f7f2ep1430fajsn35b0f4caddfd",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
