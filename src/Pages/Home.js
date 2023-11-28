import React, { useEffect, useState } from 'react'
import { stories } from '../dummyData'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Featured from '../Components/Featured'
import NewsLetter from '../Components/NewsLetter'

function Home() {
    const [featured, setFeatured] = useState([stories[0],0])
    function findFeatured(){
        for(const idx in stories){
            const story = stories[idx]
            if(story.featured){
                setFeatured([story,idx])
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
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Featured obj={featured}></Featured>
            </div>
            <NewsLetter/>
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
        </div>
    )
}

export default Home