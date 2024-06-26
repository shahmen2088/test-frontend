export const renderMovies = (movie) => {
    return `
          <div class="main-item">
              <div class="main-poster">
              
              <a class='movieId' href="movie.html?id=${movie.imdbID}"><img src=${movie.Poster === "N/A" ? "img/blank-poster.webp" : movie.Poster
        } alt="Favourites Poster"></a>
              </div>
              <div class="main-details">
                  <div class="main-details-box">
                      <div>
                          <p class="main-movie-name"><a href="movie.html?id=${movie.imdbID
        }">${movie.Title}</a></p>
                      </div>
                      <div>
                          <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                      </div>
                  </div>
              </div>
          </div>
         `;
};
