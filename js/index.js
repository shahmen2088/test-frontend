//API Key - e992c620

const key = 'e992c620';

let searchInput = document.getElementById('input');
let displaySearchList = document.getElementsByClassName('main-container');

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e992c620')
//     .then(res => res.json())
//     .then(data => console.log(data));

searchInput.addEventListener('input', findMovies);

// Рендеринг фильмов


async function singleFilm() {
    let urlQueryParams = new URLSearchParams(window.location.search);
    let id = urlQueryParams.get('id')
    const response = await fetch(`http://www.omdbapi.com/?i=${'tt21276878'}&apikey=${key}`);
    const data = await response.json();

    const { Title, Year, imdbRating, Genre, Plot } = data;

    let output = `
    <dialog class="modal" style="padding: 0">
        <div id="modal-box" class="modal-box">
            <div class="movie-poster" id="movie-poster">
                <div class="movie-poster__inner">
                    <h2 class="movie-poster__inner--title">${Title}</h2>
                    <div class="movie-poster__inner--buttons">
                        <button class="movie-poster__inner--buttons--watch"><svg width="18" height="18"
                                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8756 8.46594C14.4266 8.87529 14.4108 9.7053 13.8447 10.0934L6.06546 15.4267C5.40185 15.8817 4.5 15.4066 4.5 14.602L4.5 3.48879C4.5 2.66682 5.4366 2.19588 6.09639 2.68609L13.8756 8.46594Z"
                                    fill="#161615" />
                            </svg>
                            Смотреть</button>
                        <button class="movie-poster__inner--buttons--fav"><svg width="44" height="44"
                                viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#737373" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M25.75 15.25H18.25C17.425 15.25 16.75 15.925 16.75 16.75V28.75L22 26.5L27.25 28.75V16.75C27.25 15.925 26.575 15.25 25.75 15.25ZM25.75 26.5L22 24.865L18.25 26.5V16.75H25.75V26.5Z"
                                    fill="#E6E6E6" />
                            </svg>
                        </button>
                        <button class="movie-poster__inner--buttons--share"><svg width="44" height="44"
                                viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#737373" />
                                <g clip-path="url(#clip0_2_1327)">
                                    <path
                                        d="M26.5 25.06C25.93 25.06 25.42 25.285 25.03 25.6375L19.6825 22.525C19.72 22.3525 19.75 22.18 19.75 22C19.75 21.82 19.72 21.6475 19.6825 21.475L24.97 18.3925C25.375 18.7675 25.9075 19 26.5 19C27.745 19 28.75 17.995 28.75 16.75C28.75 15.505 27.745 14.5 26.5 14.5C25.255 14.5 24.25 15.505 24.25 16.75C24.25 16.93 24.28 17.1025 24.3175 17.275L19.03 20.3575C18.625 19.9825 18.0925 19.75 17.5 19.75C16.255 19.75 15.25 20.755 15.25 22C15.25 23.245 16.255 24.25 17.5 24.25C18.0925 24.25 18.625 24.0175 19.03 23.6425L24.37 26.7625C24.3325 26.92 24.31 27.085 24.31 27.25C24.31 28.4575 25.2925 29.44 26.5 29.44C27.7075 29.44 28.69 28.4575 28.69 27.25C28.69 26.0425 27.7075 25.06 26.5 25.06ZM26.5 16C26.9125 16 27.25 16.3375 27.25 16.75C27.25 17.1625 26.9125 17.5 26.5 17.5C26.0875 17.5 25.75 17.1625 25.75 16.75C25.75 16.3375 26.0875 16 26.5 16ZM17.5 22.75C17.0875 22.75 16.75 22.4125 16.75 22C16.75 21.5875 17.0875 21.25 17.5 21.25C17.9125 21.25 18.25 21.5875 18.25 22C18.25 22.4125 17.9125 22.75 17.5 22.75ZM26.5 28.015C26.0875 28.015 25.75 27.6775 25.75 27.265C25.75 26.8525 26.0875 26.515 26.5 26.515C26.9125 26.515 27.25 26.8525 27.25 27.265C27.25 27.6775 26.9125 28.015 26.5 28.015Z"
                                        fill="#E6E6E6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1327">
                                        <rect width="18" height="18" fill="white" transform="translate(13 13)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div class="movie-poster__inner--rating">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_723)">
                                <path
                                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                                    fill="#E6E6E6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_723">
                                    <rect width="24" height="24" fill="yellow" />
                                </clipPath>
                            </defs>
                        </svg>
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

            </div>
            <button id="close-modal-btn" class="close-modal-btn"><svg width="32" height="32" viewBox="0 0 32 32"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#737373" />
                    <path
                        d="M23 10.41L21.59 9L16 14.59L10.41 9L9 10.41L14.59 16L9 21.59L10.41 23L16 17.41L21.59 23L23 21.59L17.41 16L23 10.41Z"
                        fill="#090808" />
                </svg>
            </button>
        </div>
    </dialog>`;


}





async function displayMovieList(movies) {
    const filteredData = [...movies].sort(function (filmA, filmB) {
        return parseInt(filmB.Year) - parseInt(filmA.Year);
    });
    let output = '';
    for (i of filteredData) {

        let img = '';

        if (i.Poster != 'N/A') {
            img = i.Poster;
        }
        else {
            img = 'img/blank-poster.webp';
        }
        let id = i.imdbID;


        output += `
        <div class="main-item">
            <div class="main-poster">
            <a href="movie.html?id=${id}"><img src=${img} alt="Favourites Poster"></a>
            </div>
            <div class="main-details">
                <div class="main-details-box">
                    <div>
                        <p class="main-movie-name"><a href="movie.html?id=${id}">${i.Title}</a></p>
                    </div>
                    <div>
                         <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                         <button id="show-modal-btn" class="show-modal-btn">Show modal</button>
                    </div>
                </div>
            </div>
        </div>
       `
    }
    document.querySelector('.main-container').innerHTML = output;
}

// Поиск фильма 

async function findMovies() {
    const url = `https://www.omdbapi.com/?s=${(searchInput.value).trim()}&page=1&apikey=${key}`;
    const res = await fetch(`${url}`);
    const data = await res.json();

    if (data.Search) {
        displayMovieList(data.Search)
    }
}

/* Модальное окно */

const modal = document.querySelector('dialog')
const modalBox = document.getElementById('modal-box')
const showModalBtn = document.getElementById('show-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
    modal.showModal();
    isModalOpen = true;
    e.stopPropagation();
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
    isModalOpen = false
})

document.addEventListener('click', (e) => {
    if (isModalOpen && !modalBox.contains(e.target)) {
        modal.close()
    }
})


