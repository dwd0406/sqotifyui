import React from 'react';
import { Link } from 'react-router-dom';
import '../SearchCate/index.css';
const SearchCate = props => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, 
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        }, 
        {
            id: 101,
            category_id: 1,
            name: '日本流行樂合輯',
            img:
                'https://seed-mix-image.spotifycdn.com/v6/img/j_pop/2mcj8ajoE1eFlNkAihw5Cg/zh-Hant/large',
            desc: 'Tsukuyomi、Sayuri、milet 和更多藝人',
        },
    ]

    let matchedPlaylists = dataPlaylists
        .filter(playlist => playlist.category_id === props.category_id)
        .slice(0, props.limiter)

    return (
        <div className="searchcardsWrapInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/` + playlist.id} key={id}>
                    <div className="searchcard" key={id}>
                        <span className='title'>{playlist.name}</span>
                        <img className='IMG' src={playlist.img} alt="Pic 1" />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default SearchCate