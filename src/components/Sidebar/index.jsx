import React, { useEffect, useState } from 'react';
import '../Sidebar/index.css';
import SidebaOption from '../SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import APIKit from '../.././spotify';
const Sidebar = () => {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        APIKit.get("me/playlists").then((response) => {
            setPlaylists(response.data.items);
        });
    }, []);

    return (
        <div className='sidebar'>
            <img
                className='sidebarlogo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                alt='' />
            <Link to={'/'} className='link'>
                <SidebaOption Icon={HomeIcon} option='首頁' />
            </Link>
            <Link to={'/search'} className='link'>
                <SidebaOption Icon={SearchIcon} option='搜尋' />
            </Link>
            <Link to={'/collection'} className='link'>
                <SidebaOption Icon={LibraryMusicIcon} option='你的音樂庫' />
            </Link>
            <hr></hr>
            <Link to={'/Home'} className='link'>
                <SidebaOption Icon={AddIcon} option='建立播放清單' />
            </Link>
            <Link to={'/collection/tracks'} className='link'>
                <SidebaOption Icon={FavoriteIcon} option='已按讚的歌曲' />
            </Link>
            <hr />
            {playlists.map((playlist) => (
                <div
                    key={playlist.id}
                >
                    <li><Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link></li>
                </div>
                ))}
        </div>
    )
}

export default Sidebar
