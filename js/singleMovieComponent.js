export const renderSingleMovie = (data) => {
console.log(data);
    const {Poster, Title, Year, imdbRating, Genre, Plot } = data;
    return `
    <div class="movie-poster" id="movie-poster">
        <div class="movie-poster__inner">
            <h2 class="movie-poster__inner--title">${Title}</h2>
            <div class="movie-poster__inner--buttons">
                <button class="movie-poster__inner--buttons--watch"><img src="./img/images/Icon (1).png" alt="">
                    Смотреть</button>
                <button class="movie-poster__inner--buttons--fav"><img src="./img/images/Type=Bookmark.png" alt="">
                </button>
                <button class="movie-poster__inner--buttons--share"><img src="./img/images/Type=Share.png" alt="">
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
                ${Genre}
            </ul>
            <div class="movie-poster__inner--description">
                <p>${Plot}</p>
            </div>
        </div>
    </div>`;
}