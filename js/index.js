import APIWrapperFn from './api/apiContainer.js'
import * as APIURL from './api/apiURLs.js'
import {showMovieBasedOnFilter, listByPage} from "./eventFunctions.js";


const cardHeading = document.getElementsByClassName('cardHeading')[0]
const card = document.getElementsByClassName('card')[0]
const first = document.getElementById('first')
const last = document.getElementById('last')
const previous = document.getElementById('previous')
const next = document.getElementById('next')


function getGenre() {
    const url = APIURL.getGenreURL()
    return APIWrapperFn('get', url, {}, null, null)
        .then(res => res)
}
function discoverGenre(genre, page) {
    const url = APIURL.getDiscoverMovieByGenre(genre)
    return APIWrapperFn('get', url, {page,with_genres:genre}, null, null)
        .then(res => res)
}
function getMovieDetails(movieId) {
    const url = APIURL.getMovieDetailsURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getMovieCredits(movieId) {
    const url = APIURL.getMovieCreditsURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getMovieImages(movieId) {
    const url = APIURL.getMovieImagesURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getMovieReleaseDate(movieId) {
    const url = APIURL.getMovieReleaseDateURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getMovieReviews(movieId) {
    const url = APIURL.getMovieReviewsURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getSimilarMovie(movieId) {
    const url = APIURL.getSimilarMovieURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getMovieVideos(movieId) {
    const url = APIURL.getMovieVideosURL(movieId)
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}


export function getNowPlayingMovies(page) {
    const url = APIURL.getNowPlayingMoviesURL()
    return APIWrapperFn('get', url, {page}, null, null)
        .then(res => {
            console.log('getNowPlayingMovies......',res)
            return res
        })
}

function getPopularMovies() {
    const url = APIURL.getPopularMoviesURL()
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}
function getUpcomingMovies() {
    const url = APIURL.getUpcomingMoviesURL()
    APIWrapperFn('get', url, {}, null, null)
        .then(res => console.log(res))
}



/**
 * Now playing movie list
 * @type {Promise<unknown>}
 */
// const nowPlayingMoviesList = getNowPlayingMovies()
//
// function nowPlaying() {
//     try {
//         nowPlayingMoviesList.then(response => {
//             console.log('in card...', response)
//
//             cardHeading.innerText = 'Movie'
//
//             showMovieBasedOnFilter(card, response)
//
//         })
//     } catch (e) {
//         console.log(`Error in nowPlayingMoviesList------${e}`)
//     }
// }

/**
 *
 *
 *
 *
 */

const getGenreList = getGenre()

export const getGenreListFilter = () =>{
getGenreList.then(response=>{
    const result = response.genres
    console.log('in get genre...', result)
    const categoryItems = document.getElementById('CategoryItems')

    result.map(r=>{
        const el = document.createElement('div')

        el.innerText = r.name
        el.classList.add('dropdownOptions')
        el.addEventListener('click',  ()=>movieListBasedOnGenre(r))
        categoryItems.appendChild(el);
    })
})
}

export function movieListBasedOnGenre (genre, page=1) {

    discoverGenre(genre.id, page)
        .then(res=>{
            console.log('movieListBasedOnGenre........',res.results)
            card.innerHTML = ''
            cardHeading.innerText = genre.name
            showMovieBasedOnFilter(card, res.results)
            next.addEventListener('click', ()=>{
                listByPage(genre, ++res.page)
            })
        })
        .catch(e=> console.log(e))
}


const showGenreFilter = document.getElementsByClassName("dropbtn")[0]
showGenreFilter?.addEventListener('click', ()=>{
    document.getElementById("CategoryItems").classList.toggle("show");
    getGenreListFilter()
})

next.addEventListener('click', ()=>{
    listByPage()
})

