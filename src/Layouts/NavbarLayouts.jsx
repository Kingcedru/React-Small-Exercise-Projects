import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function NavbarLayouts() {
  return (
    <header>
        <nav>
            <NavLink to='Home'/>
            <NavLink to='Contact'/>
            <NavLink to='About us'/>
        </nav>
        <main>
            <Outlet/>
            </main>
    </header>

  )
}

export default NavbarLayouts