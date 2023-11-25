import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { stories } from '../dummyData'
import Navbar from '../Components/Navbar'

function About(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const onClickHandle = (link) =>{
        navigate('/content', {state:{link:link}})
    }
    return (
        <div className='about'>
            <div className='about-main'>
                <div style={{width:'50%'}}>
                    <img src={stories[location.state.id].cover}></img>
                    <h1>{stories[location.state.id].title}</h1>
                </div>
                <div style={{margin:'30px'}}>
                    {stories[location.state.id].flag && <p style={{color:'orange'}}>(OFFENSIVE CONTENT WARNING)</p>}
                    <p className='description'>SYNOPSIS: {stories[location.state.id].desc}</p>
                    <div style={{margin:'20px'}}>
                        <p style={{marginBottom:'12px', color:'white'}}>Click on the title to read the chapter-</p>
                        {
                        stories[location.state.id].chapter_title.map((item, key) => {
                            return (
                                <div onClick={()=>{onClickHandle(stories[location.state.id].chapters[key])}}>
                                    <p>{item}</p>
                                </div>
                            )
                        }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About