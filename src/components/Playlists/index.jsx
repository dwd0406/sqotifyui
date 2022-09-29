import React, { useEffect } from 'react'
import { reducerCases } from '../../utils/Constants';
import { useStateProvider } from '../../utils/StateProvider';
import axios from "axios";

const Playlists = () => {
    const [{ token, playlists }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            console.log(items);
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };

    return (
        <div>
            {playlists.map((playlist) => {
                return (
                    <li key={playlist.id} onClick={() => changeCurrentPlaylist(playlist.id)}>
                        {playlist.name}
                    </li>
                );
            })}
        </div>
    )
}

export default Playlists
