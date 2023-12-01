import React from 'react'
import { stories } from '../dummyData'
import { useNavigate } from 'react-router-dom'

function Stories() {
    const navigate = useNavigate()
    function onClickHandle(id) {
        navigate('/about', { state: { id: id } })
    }
  return (
    <div className='stories'>
        <div className='stories-inner'>
            {stories.map((item,key)=>{
                return(
                    <div className='card' onClick={()=>{onClickHandle(key)}}>
                        <img src={item['wide-img']}></img>
                        <div className='card-des' style={{padding:'20px', paddingBottom:'40px'}}>
                            <h1>{item.title}</h1>
                            <p style={{marginTop:'20px'}}>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Stories