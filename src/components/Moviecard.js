import React from 'react'
import { BANNER_URL } from '../utils/constant.js'
import { useDispatch } from "react-redux";
import { getId, setOpen } from '../redux/movieslice.js';

const Moviecard=({posterPath,movieId})=> {
  const dispatch = useDispatch();
  if(posterPath===null) return null;

  const handleOpen=()=>{
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src={`${BANNER_URL}/${posterPath}`} alt='movie'/>
    </div>
  )
}
export default Moviecard