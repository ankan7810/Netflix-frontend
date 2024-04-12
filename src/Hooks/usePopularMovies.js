
import axios from 'axios'
import { Popular_Movie, options } from '../utils/constant.js';
import { getPopularMovies } from '../redux/movieslice.js';
import {useDispatch} from 'react-redux'

const usePopularMovies=async()=> {
    const dispatch=useDispatch()
    try {
        const res=await axios.get(Popular_Movie,options)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log("Error",error);
    }
}

export default usePopularMovies
