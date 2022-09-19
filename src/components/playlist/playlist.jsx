import React from 'react'
import { Link } from 'react-router-dom'
import '../playlist/playlist.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Playlists = props => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: '2000 年代合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/7ya3wFqG9X35S7L7XSrE2i/zh-Hant/large',
            desc: '李聖傑、信樂團、盧廣仲 和更多藝人',
        },
        {
            id: 102,
            category_id: 3,
            name: '2010 年代合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/0GVoNfTDWNN9TUXc4mx1FX/zh-Hant/large',
            desc: '卓義峯、告五人 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 103,
            category_id: 3,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 104,
            category_id: 1,
            name: '你好',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 106,
            category_id: 2,
            name: '哈哈是我 ',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 107,
            category_id: 2,
            name: '魚魚魚',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
    ]

    let matchedPlaylists = dataPlaylists
        .filter(playlist => playlist.category_id === props.category_id)
        .slice(0, props.limiter)

    return (
        <div className="cardsWrapInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/` + playlist.id} key={id}>
                    <div className="card" key={id}>
                        <div className="cardImage">
                            <img src={playlist.img} alt="Pic 1" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.name}</h3>
                            <span className='descspan'>{playlist.desc}</span>
                        </div>
                        <span>
                            <PlayCircleIcon className='playIcon' />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Playlists