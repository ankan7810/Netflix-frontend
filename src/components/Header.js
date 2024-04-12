import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector} from 'react-redux'
import  {API_END_POINT}  from '../utils/constant.js'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {setuser} from '../redux/userslice.js'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import { setToggle } from '../redux/movieslice.js';

function Header() {
    const user=useSelector((store)=>store.app.user)
    const toggle=useSelector((store)=>store.app.toggle)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    console.log(user);

    const logoutHandler=async()=>{
        try {
            const res=await axios.get(`${API_END_POINT}/logout`)
            if(res.data.success){
                toast.success(res.data.message)
              }
            dispatch(setuser(null))
            navigate("/")
        } catch (error) {
            console.log("Error",error);
        }
    }
    const toggleHandler=()=>{
        dispatch(setToggle())
    }
    return (
        <div className='absolute z-10 flex items-center w-[100vw] justify-between bg-gradient-to-b from-black px-6'>
            <img className='w-56 opacity-100' src='https://www.shutterstock.com/image-vector/kuningan-indonesia-may-8-2023-260nw-2300098757.jpg' alt='Netflix-logo' />
           {
            user && (
                <div className='flex items-center'>
                <IoIosArrowDropdown size="24px" color='white' className=''/>
                <h1 className='text-lg font-medium'>{user.fullname}</h1>
                <div className='ml-4'>
                    <button  onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
                    <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? "Home":"Search movie"}</button>
                </div>
            </div>
               )
           }
            
        </div>
    )
}

export default Header