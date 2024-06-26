import React from 'react'
import videoHomePage from "../../assets/video-homepage.mp4"
function HomePage() {
    return (
        <div className='homepage-container'>
            <video poster="/static/homepage/hero/hero-poster.webp" controls width="100%" loop="" autoplay="" playsinline="" preload="none"  >
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default HomePage