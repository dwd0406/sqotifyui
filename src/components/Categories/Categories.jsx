import React, { useRef, useEffect, useState } from 'react'
import Playlists from '../playlist/playlist.jsx'
import '../Categories/test.css';

const Categories = () => {
    const [limiter, setLimiter] = useState(0)
    const mainInnerRef = useRef()
    const dataCategories = [
        {
            id: 1,
            name: '專為你打造',
        },
        {
            id: 2,
            name: '最近播放',
        },
        {
            id: 3,
            name: '更多你喜愛的音樂',
        }
    ]

    useEffect(() => {
        const handleWindowResize = () => {
            const calculation = Math.floor(
                mainInnerRef.current.getBoundingClientRect().width / 195
            )
            setLimiter(calculation)
        }
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <div className='mainInner' ref={mainInnerRef}>
            {dataCategories.map((category, id) => (
                <div className='cardsWrap' key={id}>
                    <h2>{category.name}</h2>
                    <p className='subText'>{category.tagline}</p>
                    <Playlists category_id={category.id} limiter={limiter} />
                </div>
            ))}
        </div>
    )
}

export default Categories