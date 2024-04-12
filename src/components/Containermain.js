import React from 'react'
import VideoTitle from './VideoTitle.js'
import VideoBackground  from './VideoBackground.js'
import {useSelector} from 'react-redux'

function Containermain() {
  const movie=useSelector((store)=>store.movie?.nowPlayingMovies);
  if(!movie) return;//early return react.

  const {overview,id,title}=movie[4]
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default Containermain
