//custom hooks r naming korar somiy prefix a "use" lagata hoi.
import axios from 'axios'
import { getupcomingMovies } from '../redux/movieslice.js';
import {useDispatch} from 'react-redux'
import { Upcoming_Movie, options } from '../utils/constant.js'

 const useUpComingMovies=async()=>{
    const dispatch=useDispatch()
    try {
      const res=await axios.get(Upcoming_Movie,options)
      console.log(res.data.results);
      dispatch(getupcomingMovies(res.data.results))
    } catch (error) {
      console.log("Error",error);
    }
  }
export default useUpComingMovies