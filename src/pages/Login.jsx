import React from 'react'
import { loginEndpoint } from '../spotify';
import '../pages/playsong.css';

export default function Login() {
    return (
        <div className='login'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='logo-spotify'
        className='Spotifylogo'
      />
      <a href={loginEndpoint}>
        <div className='loginbtn'>LOG IN</div>
      </a>
    </div>
    )
}
