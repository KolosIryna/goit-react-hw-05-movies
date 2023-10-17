import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/movie/157336?api_key=19c3c1131366dcbffe75fc92ac012355';
const API_KEY = '19c3c1131366dcbffe75fc92ac012355';

export const getImage = async (value, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?q=${value}&page=${page}&key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error('Ooops Error');
  }
};
