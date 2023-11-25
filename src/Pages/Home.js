import React, { useEffect, useState } from 'react'
import { stories } from '../dummyData'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Featured from '../Components/Featured'

function Home() {
    const [featured, setFeatured] = useState(stories[0])
    function findFeatured(){
        for(const story of stories){
            console.log(story)
            if(story.featured){
                setFeatured(story)
                break;
            }
        }
    }
    useEffect(()=>{
        findFeatured()
    },[])
    const navigate = useNavigate()
    function onClickHandle(id) {
        navigate('/about', { state: { id: id } })
    }
    return (
        <>
            <Featured obj={featured}></Featured>
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
        </>
    )
}

export default Home