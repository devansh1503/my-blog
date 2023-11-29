import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { stories } from '../dummyData'
import Navbar from '../Components/Navbar'

function About(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const onClickHandle = (link) => {
        navigate('/content', { state: { link: link } })
    }
    return (
        <div className='about'>
            <div className='about-outer'>
                <div style={{ marginBlock: '20px' }}>
                    <h1 style={{fontSize:'50px', fontFamily:"Georgia"}}>{stories[location.state.id]['title']}</h1>
                </div>
                <div className='about-box' style={{display:'flex', backgroundColor:'rgb(102,0,234)', justifyContent:'center'}}>
                    <div className='about-des' style={{ border: '1px solid black', backgroundColor:"white", boxShadow:'10px 10px 15px black' }}>
                        <img src={stories[location.state.id]['wide-img']} style={{ width: '100%' }}></img>
                        <h2 style={{ fontSize: '22px', fontFamily: 'Georgia', margin: '30px', marginBottom: '10px' }}>SYNOPSIS-</h2>
                        <p style={{ margin: '30px', marginTop: '10px' }}>{stories[location.state.id]['desc']}</p>
                        <p style={{ margin: '30px', color: 'rgb(102,0,234)' }}>Genre- {stories[location.state.id]['genre']} {stories[location.state.id].flag && "(Offensive Content Warning)"}</p>
                    </div>
                    <div className='chapter-list' style={{ backgroundColor: 'black', color: 'white', fontSize: '25px', alignSelf: 'flex-start' }}>
                        {
                            stories[location.state.id].chapter_title.map((item, key) => {
                                console.log(item)
                                return (
                                    <div onClick={()=>{onClickHandle(stories[location.state.id].chapters[key])}} className='chapter-style'>
                                        {item}
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