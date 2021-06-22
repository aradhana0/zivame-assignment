import * as APIURL from "./api/apiURLs.js";
import APIWrapperFn from "./api/apiContainer.js";

/**
 * Movie Details Page
 *
 *
 */
const movieData = JSON.parse(sessionStorage.getItem('selectedMovieDetail'))
const movieImg = document.getElementById('movieImg')
const movieName = document.getElementById('movieName')
const movieDescription = document.getElementById('movieDescription')
const avgRating = document.getElementById('avgRating')
const genreList = document.getElementById('genre')
const movieId =  window.location.search.slice(4)

const backToHome = document.getElementById('backToHome')
backToHome.addEventListener('click', ()=>{
    window.location.href= '/MovieDB/index.html'
})

movieImg.src = 'https://image.tmdb.org/t/p/w400/'+ movieData.poster_path
movieName.innerText = movieData.title
movieDescription.innerText = movieData.overview
avgRating.innerText = ' IMDB: ' + movieData.vote_average + ' ('+movieData.vote_count + ' Users)'



function getMovieDetails(movieId) {
    const url = APIURL.getMovieDetailsURL(movieId)
    return APIWrapperFn('get', url, {}, null, null)
        .then(res => res)
}
try{
getMovieDetails(movieId)
    .then(res=>{
        console.log(res)
        if(res.genres.length > 0){
            const genres = res.genres.map(genre=>genre.name)
            genreList.innerText = genres.join(', ')
        }
    })
}
catch (e) {
    console.log(e)
}

console.log('session data.....', movieData,movieId)
