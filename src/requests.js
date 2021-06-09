import React from 'react'
let api_key = 'e1fa13c7e6a35b25826f92b2aea94264'

const requests = {
    trending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    netflixoriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    toprated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    acitonmovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    comedymovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    horrormovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    romancemovies:`/discover/movie?api_key=${api_key}&with_genres=10749`
}

export default requests;