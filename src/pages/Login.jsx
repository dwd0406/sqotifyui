import React from 'react';
import '../pages/playsong.css';
import { loginEndpoint } from '.././utils/StateProvider';

export default function Login() {
  return (
    <div className='login'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='logo-spotify'
        className='Spotifylogo'
      />
      <a href={loginEndpoint}>
        <button className='loginbtn'>LOG IN</button></a>
    </div>
  )
}
