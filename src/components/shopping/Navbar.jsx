import React from 'react'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavbarLayouts from '../../Layouts/NavbarLayouts'
import Home from './Home'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<NavbarLayouts/>}>
            <Route index  element={<Home/>}/>
        </Route>
    )
)
function Navbar() {
  return <RouterProvider router={route}/>
}

export default Navbar