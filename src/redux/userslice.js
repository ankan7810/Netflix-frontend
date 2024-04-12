import {createSlice} from '@reduxjs/toolkit'

const userslice=createSlice({
    //name of our slice it's initially null.
    name:"user",
    initialState:{
        user:null,
        isLoading:false
    },
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        }
    }
})

export const {setuser,setLoading}=userslice.actions
export default userslice.reducer