import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browse from './Browse.js'
import Login from './Login.js'

function Body() {
 const approuter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
 ])
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
