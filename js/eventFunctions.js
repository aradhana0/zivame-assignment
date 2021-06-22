// global JavaScript variables
import {getNowPlayingMovies, movieListBasedOnGenre} from "./index.js";


let page = 1;
let numberOfPages = 1;   // calculates the total number of pages
const cardHeading = document.getElementsByClassName('cardHeading')[0]
const card = document.getElementsByClassName('card')[0]

function nowPlaying(page = 1) {
    const nowPlayingMoviesList = getNowPlayingMovies(page)
    try {
        nowPlayingMoviesList.then(response => {
            console.log('in card...', response)
            numberOfPages = response.results.total_pages
            page = response.page

            cardHeading.innerText = cardHeading.innerText ? cardHeading.innerText : 'Movie'

            showMovieBasedOnFilter(card, response.results)

        })
    } catch (e) {
        console.log(`Error in nowPlayingMoviesList------${e}`)
    }
}


if( cardHeading.innerText === 'Movie')
nowPlaying()
console.log('inner ......', cardHeading.innerText)
export function listByPage(id, pageNo) {
    console.log(id)
    console.log(pageNo)
    if(!id)
        nowPlaying(++page)
    else
        movieListBasedOnGenre(id, pageNo)
}

export function showMovieBasedOnFilter(card, r) {
    console.log('showMovieBasedOnFilter.......', window.location)
    r.map(r => {
        const el = document.createElement('div')             // Create a <div> node
        el.classList.add('cardContent');
        el.addEventListener('click', () => {
            sessionStorage.setItem('selectedMovieDetail', JSON.stringify(r))
            window.location.href = '/MovieDB/movieDetails.html?id=' + r.id
        })


        const img = document.createElement('img')
        img.classList.add('movieImg')
        img.src = 'https://image.tmdb.org/t/p/w400/' + r.poster_path
        img.setAttribute('loading', 'lazy')
        el.appendChild(img)

        const title = document.createElement('div')
        title.innerText = ' IMDB: ' + r.vote_average + ' (' + r.vote_count + ' Users)'
        title.classList.add('caption')
        el.appendChild(title);


        // const movieSummary = document.createElement('p');
        // movieSummary.innerHTML = r.overview
        // movieSummary.classList.add('movieSummary')

        // el.appendChild(movieSummary)
        card.appendChild(el);
    })
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/**
 * Movie Details Page
 *
 *
 */

// const backToHome = document.getElementById('backToHome')
// backToHome.addEventListener('click', ()=>{
//     window.location.href= '/MovieDB/index.html'
// })
