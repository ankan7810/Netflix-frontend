import React from 'react'
import Movielist from './Movielist.js'
import {useSelector} from "react-redux";
// import store from '../redux/store.js';

const Containermovie=()=> {
  const movie = useSelector((store)=>store.movie);
  return (
    <div className='bg-black '>
      <div className='-mt-52 relative z-10 '>
       <Movielist title={"Now Playing Movies"}  movies={movie.nowPlayingMovies} />
        <Movielist title={"Popular Movie"}  movies={movie.popularmovie} />
        <Movielist title={"Top Rated Movies"}  movies={movie.topRatedMovies} />
        <Movielist title={"Upcoming Movies"} movies={movie.upcomingMovies } />
      </div>
    </div>
  )
}

export default Containermovie
