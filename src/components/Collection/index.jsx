import React, { useEffect, useState } from 'react';
import '../Collection/index.css';
import APIKit from '../../utils/StateProvider'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Collection() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        APIKit.get('users/johnny99457/playlists?offset=0&limit=20').then(function (response) {
            setPlaylists(response.data.items);
        });
    }, []);
    console.log(playlists);


    return (
        <div className='mainInner'>
            <div className='cardsWrap'>
                <h2>播放清單</h2>
                <p className='subText'></p>
                <div className='cardsWrapInner'>
                    {playlists?.map((playlist) => (
                        <div className="card" key={playlist.id}>
                            <div className="cardImage">
                                <img src={playlist.images[0].url} alt="Pic 1" />
                                <span>
                                    <PlayCircleIcon className='playIcon' />
                                </span>
                            </div>
                            <div className="cardContent">
                                <h3 className='ddd'>{playlist.name}</h3>
                                <span className='descspan'>{playlist.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}