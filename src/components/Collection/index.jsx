import React, { useRef, useEffect, useState } from 'react';
import Playlists from '../playlist/index.jsx';
import '../Collection/index.css';

const Collection = () => {
    const [limiter, setLimiter] = useState(0)
    const mainInnerRef = useRef()
    const dataCategories = [
        {
            id: 3,
            name: '播放清單',
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

export default Collection