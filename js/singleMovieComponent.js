export const renderSingleMovie = (data) => {
    const {Poster, Title, Year, imdbRating, Genre, Plot } = data;
    const genre = Genre.split(',').map(item => {
        return `<li>${item.trim()}</li>`
    }).join('');  
    const movie_poster = document.createElement('div');
    movie_poster.className = 'movie-poster';
    movie_poster.id = 'movie-poster';

    let movie__poster_inner = `
    <div class="movie-poster__inner">
            <button class="movie-poster__close-button" id="movie-poster__close-button"><img src="./img/images/Button-Big.png" alt="close"></button>
            <h2 class="movie-poster__inner--title">${Title}</h2>
            <div class="movie-poster__inner--buttons">
                <button class="movie-poster__inner--buttons--watch"><img src="./img/images/Icon (1).png" alt="">
                    Смотреть</button>
                <button class="movie-poster__inner--buttons--fav"><img src="./img/images/Button-Bookmark.png" alt="">
                </button>
                <button class="movie-poster__inner--buttons--share"><img src="./img/images/Button-Share.png" alt="">
                </button>
            </div>
            <div class="movie-poster__inner--rating">
                <img src="./img/images/Type=Star.png" alt="">
                ${imdbRating}
                |
                ${Year}
            </div>
            <div class="movie-poster__inner--restriction">16+</div>
            <ul class="movie-poster__inner--categories">
                ${genre}
            </ul>
            <div class="movie-poster__inner--description">
                <p>${Plot}</p>
            </div>
        </div>`;
        movie_poster.style.backgroundImage = `url(${Poster})`;
        movie_poster.innerHTML = movie__poster_inner;
        
    return movie_poster.outerHTML;
}