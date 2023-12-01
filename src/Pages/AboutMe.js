import React, { useState } from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import me from '../assets/me.jpg'

function AboutMe() {
    const [images, setImages] = useState([img1, img2, img3, img4, img5, img6, img7, img8])
  return (
    <div className='about-me'>
        <h1 style={{fontFamily:'Georgia', fontSize:'40px', marginBottom:'20px'}}>Let's Know Each Other!</h1>
        <div className='img-para'>
            <div className='cover-img'>
                <img className='background' src={me}></img>
            </div>
            <div style={{padding:'20px'}}>
                <p>
                    My name is Devansh, and I am a software Developer by profession, and do writing as a hobby. This blog is a collection of my stories and articles and a form of my expression. Stories, I believe, are a great teacher and for both who writes and reads them, using a collection of words you can pierce into the depths of glory, tragedy, comedy, romance, fate, defeat, tears and many things. For my part, I don't claim to be a professional writer, but someone who wants to use this skill as a way to express my Sublime dreams! Hope you enjoy 
                </p>
                <p>
                    Other than writing, I also do Photography, below you can find a few of my best pictures, which you may also find of my instagram handle, I would highly appreciate your support by following my instagram. Besides instagram I also have a youtube channel where I post some coding stuff and fun illustration of projects, if interested you can check it out as well. Thanks!
                </p>
            </div>
        </div>
        <div className='insta'>
            <h1>Follow Me</h1>
            <div className='insta-pics'>
                {
                    images.map((item,key)=>{
                        return <img style={{ cursor:'pointer'}} src={item}></img>
                    })
                }
            </div>
        </div>
        <div className='contacts'>
            <a href='https://www.instagram.com/devanshabrol/'><img src='https://cdn-icons-png.flaticon.com/512/2956/2956122.png'></img></a>
            <a href='https://www.youtube.com/@devanshabrol6079'><img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_tv_icon_138003.png'></img></a>
            <a href='https://x.com/devanshjustsaid?t=zHvKupQYcO2roDbunUM6CA&s=08'><img src='https://cdn.iconscout.com/icon/free/png-256/free-twitter-x-9583449-7741112.png?f=webp'></img></a>
            <a href='https://www.linkedin.com/in/devansh-abrol-46463b201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/linkedin_icon_135436.png'></img></a>
        </div>
    </div>
  )
}

export default AboutMe