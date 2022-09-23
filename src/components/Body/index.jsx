import React from 'react';
import '../Body/index.css';
import { Route, Routes } from 'react-router-dom';
import Categories from '../Categories';
import PlaylistPage from '../../pages/Playlistpages';
import Search from '../Search';
import Collection from '../Collection';


const Body = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Categories />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='playlist/:id' element={<PlaylistPage />}></Route>
      </Routes>
    </div>
  )
}

export default Body
