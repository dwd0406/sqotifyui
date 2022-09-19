import React from 'react';
import '../Body/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Search from '../../pages/search';


const Body = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}>search</Route>
        <Route path='/collection/playlists'>123123213</Route>
      </Routes>
    </div>
  )
}

export default Body
