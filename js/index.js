import { sortMovies } from './utils.js';
import { key } from './constants.js';
import { fetchMovie, fetchMovies, fetchPopularMovies } from './api.js';
import { renderMovies } from './moviesComponents.js';
import { renderSingleMovie } from './singleMovieComponent.js';
import { ItcModal } from './ItcModal.js';

window.onload = function () {
    const searchInput = document.getElementById('input');
    const title = document.querySelector('.main__inner-title');
    searchInput.addEventListener('input', findMovies);

    // Рендеринг популярных фильмов при первоначальной загрузке 
    displayPopularMovieList()

    async function displayPopularMovieList() {
        const data = await fetchPopularMovies()
        if (data.Search) {
            console.log(data);
            title.textContent = 'Популярные';
            displayMovieList(data.Search)
        }
    }



    // Функция рендеринга 

    async function displayMovieList(movies) {
        const filteredData = sortMovies(movies);
        const output = filteredData.map(renderMovies).join('');
        document.querySelector('.main-container').innerHTML = output;
        const modal = new ItcModal();
        Array.from(document.querySelectorAll(".main-item")).forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                handleModalOpen(item, modal);
            })
        });
    }

    // Получение разметки отдельного фильма

    async function requestMovie(item) {
        let id = item.querySelector('.movieId').getAttribute('href').split('=').pop();
        return fetchMovie(id).then(result => {
            return renderSingleMovie(result);
        }).catch((e) => console.log(e))
    }

    // События открытия и закрытия модального окна

    async function handleModalOpen(item, modal) {
        requestMovie(item).then(html => {
            modal.setBody(html);
            handleModalClose(modal);
            modal.show();
        }).catch(error => console.log(error));
    }

    function handleModalClose(modal) {
        document.querySelector('.movie-poster__close-button').addEventListener('click', () => {
            modal.hide();
        });
    }

    // Поиск фильма 

    async function findMovies() {
        let data = '';
        try {
            // isLoading = true;
            data = await fetchMovies(searchInput.value.trim())
        } catch (e) {
            console.log(e);
        }
        if (data.Search) {
            title.textContent = 'Результат поиска';
            displayMovieList(data.Search)
        }
    }






    document.querySelector('#footer__button').addEventListener('click', () => {
        console.log('sad');
        const form = document.querySelector('#form');
        if (searchInput.style.display === 'block') {
            searchInput.style.display = 'none';
            form.style.display = 'none';
            document.querySelector('.header__inner-logo').style.display = 'block';
            document.querySelector('.header__inner-burger').style.display = 'block';
            document.querySelector('.header__inner-buttons').style.display = 'flex';
        } else {
            searchInput.style.display = 'block';
            form.style.maxWidth = '622px';
            form.style.display = 'flex';
            searchInput.style.marginRight = '20px';
            document.querySelector('.header__inner-logo').style.display = 'none';
            document.querySelector('.header__inner-burger').style.display = 'none';
            document.querySelector('.header__inner-buttons').style.display = 'none';
        }
    })

    document.querySelector('#header__inner-search--delete').addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
    })

    document.querySelector('#header__inner-search--delete-x').addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
    });

}