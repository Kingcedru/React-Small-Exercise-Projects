import React, { useState } from 'react'
import logo from '../assets/react.svg'
import menu from '../assets/menu-fill.svg'
import close from '../assets/close.svg'

function NavBar() {
const [icon,setIcon] = useState(false)
const [hover,setHover] = useState(false)

  return (
    <div className='w-screen'>
        <div className="">
          <nav className='flex px-5 py-4 w-full bg-indigo-500 justify-between'>
              <div className="image"><img src={logo}/></div>
              <div className="hidden md:links md:flex md:w-full md:justify-center">
                  <ul className="navbar flex gap-10">
                      <li onMouseOver={()=>setHover(!hover)}>
                      Home
                        <ul className={hover?'':'hidden'}>
                          <li>Info</li>
                          <li>Info</li>
                          <li>Info</li>
                        </ul>
                        </li>
                      <li>About</li>
                      <li>Service</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <img  onClick={()=>setIcon(!icon)} className='md:hidden' src={icon?close:menu}/>
          </nav>
          
            <main className='relative'>
            {icon && <nav className='flex absolute z-0 px-5 py-4 h-96 w-full bg-indigo-500 justify-center'>
                  <ul className="navbar flex flex-col gap-10 mt-5">
                      <li>Home</li>
                      <li>About</li>
                      <li>Service</li>
                      <li>Contact</li>
                  </ul>
            </nav>}
              <p className=''>Lorem5
              </p>
            </main>
        </div>
    </div>
  )
}

export default NavBar