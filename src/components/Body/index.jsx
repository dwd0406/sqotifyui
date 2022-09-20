import React from 'react';
import '../Body/index.css';
import { Route, Routes } from 'react-router-dom';
import Categories from '../Categories';
import PlaylistPage from '../../pages/Playlistpages';
import Search from '../Search';


const Body = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Categories />}></Route>
        <Route path='/search' element={<Search />}>search</Route>
        <Route path='/collection/playlists'>123123213</Route>
        <Route path='playlist/:id' element={<PlaylistPage />}></Route>
      </Routes>
    </div>
  )
}

export default Body
