import { sortMovies } from './utils.js';
import { key } from './constants.js';
import { fetchMovies } from './api.js';
import { renderMovies } from './moviesComponents.js';
import { renderSingleMovie } from './singleMovieComponent.js';
import { ItcModal } from './ItcModal.js';

window.onload = function () {

    let isLoading = false;
    const searchInput = document.getElementById('input');
    searchInput.addEventListener('input', findMovies);


    async function singleFilm(id) {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${key}`);
        const data = await response.json();
        return data;
    }

    // Рендеринг фильмов 

    async function displayMovieList(movies) {
        const filteredData = sortMovies(movies);
        const output = filteredData.map(renderMovies).join('');
        document.querySelector('.main-container').innerHTML = output;
        Array.from(document.querySelectorAll(".main-item")).forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                handleModalOpen(item);
            })
        });
    }

    async function handleModalOpen(item) {
        const modal = new ItcModal();
        let id = item.querySelector('.movieId').getAttribute('href').split('=').pop();
        singleFilm(id).then(result => {
            return renderSingleMovie(result);
        }).then(html => {
            modal.setBody(html);
            modal.show();
        }).catch(error => console.log(error));
    }

    // Поиск фильма 

    async function findMovies() {
        let data = '';
        try {
            isLoading = true;
            data = await fetchMovies(searchInput.value.trim())
        } catch (e) {
            console.log(e);
        }
        if (data.Search) {
            displayMovieList(data.Search)
        }
    }
}