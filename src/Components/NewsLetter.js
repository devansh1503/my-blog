import React from 'react'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <div>
            <h1>Never Miss a New Post</h1>
        </div>
        <div>
            <input placeholder='Enter your email*'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter