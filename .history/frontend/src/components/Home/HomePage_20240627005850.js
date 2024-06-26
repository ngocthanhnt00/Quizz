import React from 'react'
import videoHomePage from "../../assets/"
function HomePage() {
    return (
        <div className='homepage-container'>
            <video poster="/static/homepage/hero/hero-poster.webp" width="100%" loop="" autoplay="" playsinline="" preload="none" x-webkit-airplay="deny" >
                <source
                    src="/static/homepage/hero/hero.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default HomePage