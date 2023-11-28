import React from 'react'
import { useNavigate } from 'react-router-dom'

function Featured({obj}) {
  const navigate = useNavigate()
  function onClickHandle() {
    navigate('/about', { state: { id: obj[1] } })
  }
  return (
    <>
        <div className='featured-main'>
            <img src={obj[0].cover}></img>
            <div className='featured-details'>
                <h1>{obj[0].title}</h1>
                <p style={{fontSize:'18px', marginBlock:'20px'}}>{obj[0].desc}</p>
                <p style={{color:'black', cursor:'pointer', fontSize:'20px'}} onClick={onClickHandle}>Read More...</p>
            </div>
            <div className='featured-label'>
                <p>FEATURED POST</p>
            </div>
        </div>
    </>
  )
}

export default Featured