import { useEffect } from "react";
import axios from 'axios'
import { options } from '../utils/constant.js';
import { useDispatch } from 'react-redux'
import { gettrailerMovie } from '../redux/movieslice.js';

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
                console.log(res.data.results);
                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                })
                dispatch(gettrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]))
            } catch (error) {
                console.log("Error", error);
            }
        }
        getMovieById();
    },[movieId,dispatch])
}

export default useMovieById