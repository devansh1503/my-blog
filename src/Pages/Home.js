import React from 'react'
import { stories } from '../dummyData'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Home() {
    const navigate = useNavigate()
    function onClickHandle(id) {
        navigate('/about', { state: { id: id } })
    }
    return (
            <div className='home-main'>
                {
                    stories.map((item, key) => {
                        return (
                            <div className='story-card' onClick={() => onClickHandle(key)}>
                                <img src={item.cover}></img>
                                <h2>{item.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Home