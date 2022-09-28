import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import '../pages/playsong.css';

const PlaylistPage = () => {
    return (
        <div className='playlistPage'>
            <div className='mainInner'>
                <div className='playlistPageInfo'>
                    <div className='playlistPageImage'>
                        <img
                            src='https://seed-mix-image.spotifycdn.com/v6/img/mandopop/6xErgeZYatiaQ36SB5bvi8/zh-Hant/large'
                            alt='pic'
                        />
                    </div>
                    <div className='playlistPageContent'>
                        <p className='smallText'>播放清單</p>
                        <h1>2023年代合輯</h1>
                        <p className='tagline'>
                            好多藝人
                        </p>
                        <div className='playlistPageDesc'>
                            <p>Spotify</p>
                            <span>5首歌曲
                            </span>
                            <span>10分鐘</span>
                        </div>
                    </div>
                </div>
                <div className='playlistPageSongs'>
                    <div className='playlistButtons'>
                        <span className='PlayCircleIcon1'>
                            <PlayCircleIcon />
                        </span>
                        <div className='icons'>
                            <div className='icon iconsHeart'>
                                <FavoriteIcon />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <ul className='songList'>
                        <li>
                            <div className='songIcon'>
                                <PlayCircleIcon className='playI' />
                            </div>
                            <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'>
                                <PlayCircleIcon className='playI' />
                            </div>
                            <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'>
                                <PlayCircleIcon className='playI' />
                            </div>    <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'>
                                <PlayCircleIcon className='playI' />
                            </div>    <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'>
                                <PlayCircleIcon className='playI' />
                            </div>    <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                        <li>
                            <div className='songIcon'>

                                <PlayCircleIcon className='playI' />
                            </div>    <div className='playlistImage'>
                                <img
                                    src='https://i.scdn.co/image/ab67616d00004851b031ee53413ef37f35096a14'
                                    alt='pic'
                                />
                            </div>
                            <div className='songDetails'>
                                <h3>好不容易 (《華燈初上》片尾曲)</h3>
                                <span>告五人</span>
                            </div>
                            <div className='songTime'>
                                <span>4:07</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage