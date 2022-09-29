import React from 'react'
import '../pages/playsong.css';

export default function Login() {
  const handleClick = async () => {
    const authEndpoint = "https://accounts.spotify.com/authorize?";
    const clientId = "12ca06477cec4ad2a6d8a95cf64ba0d4";
    const redirectUri = "http://localhost:3000";
    const scopes = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  }
  return (
    <div className='login'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='logo-spotify'
        className='Spotifylogo'
      />
      <button onClick={handleClick} className='loginbtn'>LOG IN</button>
    </div>
  )
}
