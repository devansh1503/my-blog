import React from 'react'

function AboutMe() {
  return (
    <div className='about-me'>
        <h1 style={{fontFamily:'Georgia', fontSize:'40px'}}>Let's Know Each Other!</h1>
        <div className='img-para'>
            <div className='cover-img'>
                <img className='background' src='https://www.hdwallpapers.in/download/sunset_minimal_landscape_4k-HD.jpg'></img>
                <img className='dp' src='https://media.licdn.com/dms/image/D4D03AQG5JNreVp7SWA/profile-displayphoto-shrink_200_200/0/1693339156146?e=1702512000&v=beta&t=uKwj2xC0GGtLS2uw-TavCKHYkOGxfSf9rJU2ekAw9is'></img>
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

        </div>
        <div className='contacts'>

        </div>
    </div>
  )
}

export default AboutMe