import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19c3c1131366dcbffe75fc92ac012355';

export const getMovieTrends = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    throw new Error('Ooops Error. No movies to display');
  }
};
