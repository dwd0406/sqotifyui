import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';
import Login from '../pages/Login';
import { setClientToken } from '../spotify';
import '.././components/ss.css';


export default function Rrouter() {
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

    return !token ? (
        <Login />) : (
        <div>
            <div>
                <Sidebar />
                <div className='ss'>
                    <Body />
                </div>
                <Footer />
            </div>
        </div>
    )
}
