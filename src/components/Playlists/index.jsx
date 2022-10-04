import React, { useEffect, useState } from 'react'
import '../Playlists/index.css'
import APIKit from '../../utils/StateProvider'
import { useNavigate } from 'react-router-dom';
export default function Playlists() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        APIKit.get('users/johnny99457/playlists?offset=0&limit=20').then(function (response) {
            setPlaylists(response.data.items);
        });
    }, []);
    console.log(playlists);

    const navigate = useNavigate();
    const playPlaylist = (id) => {
        navigate('/player', { state: { id: id } });
    };
    return (
        <div>
            {playlists?.map((playlist) => (
                <div
                    key={playlist.id}
                    onClick={() => playPlaylist(playlist.id)}
                >
                    <li className='playlistLi'>{playlist.name}</li>
                </div>
            ))}
        </div>
    )
}