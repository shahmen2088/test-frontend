import { key } from "./constants.js";

export const fetchMovies = async (value) => {
    const url = `https://www.omdbapi.com/?s=${value}&page=1&apikey=${key}`;
    const res = await fetch(`${url}`);
    return await res.json();
  };