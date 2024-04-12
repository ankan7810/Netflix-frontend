import React, { useState } from 'react'
import Header from './Header.js'
import axios from 'axios';
import  {API_END_POINT}  from '../utils/constant.js'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setLoading, setuser} from '../redux/userslice.js'

const Login=()=> {
    const[islogin,setislogin]=useState(false)
    const[fullname,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const isloading=useSelector((store)=>store.app.isloading)

   const loginHandler=()=>{
        setislogin(!islogin)
    }
    const getInputData= async(e)=>{
        e.preventDefault();
        dispatch(setLoading(true))
        if(islogin){
          //login
          const user={email,Password}
          try {
            const res=await axios.post(`${API_END_POINT}/login`,user,{
              headers:{
                "Content-Type":'application/json'
              },
              withCredentials:true
            })
            
            if(res.data.success){
              toast.success(res.data.message)
            }

            dispatch(setuser(res.data.user))
            navigate("/browse")
          } catch (error) {
            toast.error(error.reponse.data.message)
            console.log("Error",error);
          }
          finally{
            dispatch(setLoading(false))
          }
        }else{
          //false hola "register"
          dispatch(setLoading(true))
          const user={fullname,email,Password};
          try {
            //"register" korar jonno axios method kaj a lagba.           
            //"res" a backend thaka res ascha.
            const res=await axios.post(`${API_END_POINT}/register`,user,{
              headers:{
                "Content-Type":'application/json'
              },
              withCredentials:true
            })
            console.log("Response",res);
            if(res.data.success){
              toast.success(res.data.message)
            }
            setislogin(true)
          } catch (error) {
            toast.error(error.reponse.data.message)
            console.log("Error",error);
          }
          finally{
            dispatch(setLoading(false))
          }
        }
       
        // after from submission every field are blank.
         setFullName("");
         setEmail("");
         setPassword("");  
         
    }
  return (
    
    <div>
      <Header/>
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src='https://www.bhmpics.com/downloads/netflix-backgrounds-/44.netflix-s.jpg' alt='Internet required'/>
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36  left-0 right-0 mx-auto items-center justify-center   absolute rounded-md bg-black opacity-85'>

        <h1 className='text-3xl text-white mb-5 font-bold'>{islogin ? "Login":"Signup"}</h1>
        <div className='flex flex-col'>   
        {
            !islogin &&  <input value={fullname} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white'/>  
        }                        
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white'/>  

            <input value={Password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white'/>

            <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isloading ? "loading...":(islogin?"Login":"Signup")}`}</button>

            <p className='text-white m-2'>{islogin ? "New to netflix?":"Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-600 font-medium cursor-pointer '>{islogin ? "signup":"Login"}</span></p>
        </div>
      </form>
    </div>
  )
}
// Read HTML:
// 1)opacity 2)w-3/12 3)h-[100vh] 4)cursor-pointer 5)onsubmit 6)onClick
export default Login