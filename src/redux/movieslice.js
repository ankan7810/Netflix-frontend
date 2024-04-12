import {createSlice} from "@reduxjs/toolkit";

const movieslice=createSlice({
     name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularmovie:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:""
    },
    reducers:{
      getnowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload
      },
      getPopularMovies:(state,action)=>{
        state.popularmovie=action.payload
      },
      gettopRatedMovies:(state,action)=>{
        state.topRatedMovies=action.payload
      },
      getupcomingMovies:(state,action)=>{
        state.upcomingMovies=action.payload
      },
      setToggle:(state)=>{
        state.toggle=!state.toggle
      },
      gettrailerMovie:(state,action)=>{
        state.trailerMovie=action.payload
      },
      setOpen:(state,action)=>{
        state.open=action.payload
      },
      getId:(state,action)=>{
        state.id=action.payload
      }
    }
})

export const {getnowPlayingMovies,getPopularMovies,gettopRatedMovies,getupcomingMovies,setToggle,gettrailerMovie,setOpen,getId}=movieslice.actions;
export default movieslice.reducer