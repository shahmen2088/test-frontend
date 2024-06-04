//API Key - e992c620

const key = 'e992c620';

var searchInput = document.getElementById('input');
var displaySearchList = document.getElementsByClassName('main-container');

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e992c620')
    .then(res => res.json())
    .then(data => console.log(data));

searchInput.addEventListener('input', findMovies);


async function displayMovieList(movies) {
    var output = '';
    for (i of movies) {

        var img = '';
        if (i.Poster != 'N/A') {
            img = i.Poster;
        }
        else {
            img = 'img/blank-poster.webp';
        }
        var id = i.imdbID;

        output += `
        <div class="main-item">
            <div class="main-poster">
            <a href="movie.html?id=${id}"><img src=${img} alt="Favourites Poster"></a>
            </div>
            <div class="main-details">
                <div class="main-details-box">
                    <div>
                        <p class="main-movie-name"><a href="movie.html?id=${id}">${i.Title}</a></p>
                        <p class="main-movie-rating"><a href="movie.html?id=${id}">${i.Year}</a></p>
                    </div>
                    <div>
                         <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </div>
                </div>
            </div>
        </div>
       `
    }
    document.querySelector('.main-container').innerHTML = output;
    console.log("here is movie list ..", movies);
}



async function findMovies() {
    const url = `https://www.omdbapi.com/?s=${(searchInput.value).trim()}&page=1&apikey=${key}`
    const res = await fetch(`${url}`);
    const data = await res.json();

    if (data.Search) {
      
        displayMovieList(data.Search)
    }
}