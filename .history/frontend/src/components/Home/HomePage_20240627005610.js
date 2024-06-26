import React from 'react'

function HomePage() {
    return (
        <div className='homepage-container'>
            <video poster="/static/homepage/hero/hero-poster.webp" width="100%" loop="" autoplay="" playsinline="" preload="none" x-webkit-airplay="deny" >
                <source data-testid="currentWebmVideo" src="" type="video/webm" />
                <source data-testid="currentDefaultVideo" src="/static/homepage/hero/hero.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default HomePage