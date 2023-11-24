import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
const router=createBrowserRouter([{
  path:'/',
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
  children:([
    {
      path:'/',
      element:<Home></Home>
    }
  ])




}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)