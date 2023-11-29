import React, { useEffect, useState } from 'react'
import { stories, upcoming } from '../dummyData'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Featured from '../Components/Featured'
import NewsLetter from '../Components/NewsLetter'
import TopStories from '../Components/TopStories'

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

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Featured obj={featured}></Featured>
            </div>
            <NewsLetter/>
            <div className='home-main' style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <TopStories stories={stories} title={"LATEST STORIES"}/>
                <div style={{marginInline:'50px'}}/>
                <TopStories stories={upcoming} title={"COMING SOON"}/>
            </div>
        </div>
    )
}

export default Home