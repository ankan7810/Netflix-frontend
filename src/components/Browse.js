import React from 'react'
import Header from './Header.js'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import Containermain from './Containermain.js'
import Containermovie from './Containermovie.js'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies.js'
import usePopularMovies from '../Hooks/usePopularMovies.js'
import useUpComingMovies from '../Hooks/useUpComingMovies.js'
import useTopRatedMovies from '../Hooks/useTopRatedMovies.js'
import SearchMovie from './SearchMovie.js'

function Browse() {
  // here we create a procted route.because any user don't access home page without login.
  const user=useSelector((store)=>store.app.user)
  const toggle=useSelector((store)=>store.movie.toggle)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  //my custom hooks:
  useNowPlayingMovies()
  usePopularMovies()
  useUpComingMovies()
  useTopRatedMovies()

   
  //when user try to access home page without login.then "useEffect" activate & run.
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  })
  
  return (
    <div>
      <Header/>
      <div>
       {
        toggle? <SearchMovie/> :(
          <>
        <Containermain/>
        <Containermovie/>
          </>
        )
       }

      </div>
    </div>
  )
}

export default Browse
