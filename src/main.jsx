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
import Dashboard from './Pages/Dashboard'
import Card from './Dashboard/Card/Card'
import PrivateRoute from './Router/PrivateRoute'
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
      loader:()=>fetch('https://assingmenttwelve-server.vercel.app/')
      
    }
  ]) 
},
// dashboard===========================
{
  path:'/dashboard',
  element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
  children:[
    {
       path:'/dashboard/card',
       element:<PrivateRoute><Card></Card></PrivateRoute>

    }
  ]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} ></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
