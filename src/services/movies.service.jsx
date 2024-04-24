import axios from "axios";

const base_URL = "https://api.themoviedb.org/3";
const api_key = "be7a3fd75af32d24276ec0778cbcc636";

const fetchMovies = async (callback) => {
  try {
    const response = await axios.get(`${base_URL}/trending/movie/week?language=en-US&api_key=${api_key}`);
    return callback(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchPopularMovies = async (callback) => {
  try {
    const response = await axios.get(`${base_URL}/movie/popular?api_key=${api_key}`);
    return callback(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchPopularSeries = async (callback) => {
  try {
    const response = await axios.get(`${base_URL}/trending/tv/week?language=en-US&api_key=${api_key}`);
    return callback(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchDetailMovies = async (id) => {
  try {
    const response = await axios.get(`${base_URL}/movie/${id}?append_to_response=external_ids%2Ccredits&language=en-US&api_key=${api_key}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDetailSeries = async (id) => {
  try {
    const response = await axios.get(`${base_URL}/tv/${id}?append_to_response=external_ids%2Ccredits&language=en-US&api_key=${api_key}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSearch = async (search) => {
  try {
    const response = await axios.get(`${base_URL}/search/multi?query=${search}&include_adult=false&language=en-US&api_key=${api_key}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGenres = async (media_type) => {
  try {
    const response = await axios.get(`${base_URL}/genre/${media_type}/list?api_key=${api_key}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchMovies;
