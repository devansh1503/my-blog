import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='subtext'>
        <p>LIFE IS A STORY SO, STORIES ARE LIFE.</p>
      </div>
      <div className='heading'>
        <h1>The Sublime Dream</h1>
      </div>
      <div className='menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'/stories'}>All Posts</Link>
        <Link to={'/aboutme'}>About</Link>
      </div>
    </div>
  )
}

export default Navbar