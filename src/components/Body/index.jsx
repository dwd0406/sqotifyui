import React from 'react';
import '../Body/index.css';
import { Route, Routes } from 'react-router-dom';
import Search from '../../pages/search';
import Categories from '../Categories/Categories';
import PlaylistPage from '../../pages/Playlistpages';


const Body = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Categories />}></Route>
        <Route path='/search' element={<Search />}>search</Route>
        <Route path='/collection/playlists'>123123213</Route>
        <Route path='playlist/:id' element={<PlaylistPage/>}></Route>
      </Routes>
    </div>
  )
}

export default Body
