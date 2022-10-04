import Rrouter from './components/router'
import { useEffect } from 'react'
import Login from './pages/Login';
import { useState } from 'react';
import { setClientToken } from './utils/StateProvider';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (<Login />) : (<Rrouter />)
}

export default App;
