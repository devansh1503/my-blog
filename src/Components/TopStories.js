import React from 'react'
import { useNavigate } from 'react-router-dom'

function TopStories({
    stories,
    title
}) {
    const navigate = useNavigate()
    function onClickHandle(id) {
        if(title.includes("COMING SOON")) return
        navigate('/about', { state: { id: id } })
    }
    return (
        <div style={{ width: '45%'}}>
            <div>
                <p style={{ fontSize: '25px' }}>{title}</p>
            </div>
            <div>
                {stories[0] && <div className='story-card' onClick={() => onClickHandle(0)}>
                    <img src={stories[0].cover}></img>
                    <div className='des'>
                        <h2>{stories[0].title}</h2>
                        <p>{stories[0].desc}</p>
                        <p className='genre'>Genre: {stories[0].genre}</p>
                    </div>
                </div>}
                {stories[1] && <div className='story-card' onClick={() => onClickHandle(1)}>
                    <img src={stories[1].cover}></img>
                    <div className='des'>
                        <h2>{stories[1].title}</h2>
                        <p>{stories[1].desc}</p>
                        <p className='genre'>Genre: {stories[1].genre}</p>
                    </div>
                </div>}
                {stories[2] && <div className='story-card' onClick={() => onClickHandle(2)}>
                    <img src={stories[2].cover}></img>
                    <div className='des'>
                        <h2>{stories[2].title}</h2>
                        <p>{stories[2].desc}</p>
                        <p className='genre'>Genre: {stories[2].genre}</p>
                    </div>
                </div>}
            </div>
            {stories.length===0 && <div style={{marginTop:'50px'}}>
                <p>(Nothing To Show For Now)</p>
            </div>}
        </div>
    )
}

export default TopStories