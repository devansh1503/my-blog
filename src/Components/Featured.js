import React from 'react'

function Featured({obj}) {
  return (
    <>
        <div className='featured-label'>
                <p>Featured</p>
        </div>
        <div className='featured-main'>
            <img src={obj.cover}></img>
            <div className='featured-details'>
                <h1>{obj.title}</h1>
                <p>{obj.desc}</p>
                <p>Read More</p>
            </div>
        </div>
    </>
  )
}

export default Featured