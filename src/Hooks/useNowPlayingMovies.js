//custom hooks r naming korar somiy prefix a "use" lagata hoi.
import axios from 'axios'
import { getnowPlayingMovies } from '../redux/movieslice.js';
import {useDispatch} from 'react-redux'
import { Now_Playing_Movie, options } from '../utils/constant.js'

 const useNowPlayingMovies=async()=>{
    const dispatch=useDispatch()
    try {
      const res=await axios.get(Now_Playing_Movie,options)
      console.log(res.data.results);
      dispatch(getnowPlayingMovies(res.data.results))
    } catch (error) {
      console.log("Error",error);
    }
  }
export default useNowPlayingMovies