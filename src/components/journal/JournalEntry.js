import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer' >
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EoAPyvkijJ7GpqNYYEn-twHaFj%26pid%3DApi&f=1)'
                }}
                >
                </div>
                
                <div  className="journal__entry-body">
                    <p className="journal__entry-title">
                        Un nuevo dia

                    </p>
                    <p className="journal__entry-content">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc

                    </p>
                </div>
                <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>28</h4>

                </div>

        </div>
    )
}
