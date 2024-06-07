import { key } from "./constants.js";

export const fetchMovies = async (value) => {
  const url = `https://www.omdbapi.com/?s=${value}&page=1&apikey=${key}`;
  const res = await fetch(`${url}`);
  return await res.json();
};


export const fetchMovie = async (id) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${key}`);
  return await response.json();
}

export const fetchPopularMovies = async () => {
  const response = await fetch(`https://www.omdbapi.com/?s=popular&type=movie&apikey=${key}`);
  return await response.json();
}


