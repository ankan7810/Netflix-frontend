import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice.js'
import movieReducer from './movieslice.js'
import SearchSlice from './SearchSlice.js'

const store =configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:SearchSlice
    }
})

export default store