import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="navbar sticky top-0 z-30 w-full px-2 py-4 bg-primary text-primary-content">
      <div className='flex-1'>
     <Link to='/'>
      <h1 className="btn btn-ghost normal-case text-xl">ImgStor</h1>
      </Link>
      </div>
      <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/upload'>Upload</Link></li>
      <li><Link to='/gallery'>Gallery</Link></li>
    </ul>
  </div>
    </header>
  )
}

export default Header