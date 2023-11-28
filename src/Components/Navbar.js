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
        <Link>Home</Link>
        <Link>Stories</Link>
        <Link>Articles</Link>
        <Link>About</Link>
      </div>
    </div>
  )
}

export default Navbar