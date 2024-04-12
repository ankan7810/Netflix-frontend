//custom hooks r naming korar somiy prefix a "use" lagata hoi.
import axios from 'axios'
import {  gettopRatedMovies } from '../redux/movieslice.js';
import {useDispatch} from 'react-redux'
import {Top_Rated_Movie, options } from '../utils/constant.js'

 const useTopRatedMovies=async()=>{
    const dispatch=useDispatch()
    try {
      const res=await axios.get(Top_Rated_Movie,options)
      console.log(res.data.results);
      dispatch(gettopRatedMovies(res.data.results))
    } catch (error) {
      console.log("Error",error);
    }
  }
export default useTopRatedMovies