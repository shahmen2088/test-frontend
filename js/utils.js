export const sortMovies = (movies) =>
    [...movies].sort((filmA, filmB) => +filmB.Year - +filmA.Year);