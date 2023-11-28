import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Feature from './Components/Feature/Feature'
import Delivery from './Components/Delivery/Delivery'
import AuthProvider from './Provider/AuthProvider'
const router=createBrowserRouter([{
  path:'/',
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
  children:([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/featur',
      element:<Feature></Feature>,
      
    },
    {
      path:'/delivery',
      element:<Delivery></Delivery>,
      loader:()=>fetch('http://localhost:5000/delivery')
      
    }
  ])




}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} ></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
