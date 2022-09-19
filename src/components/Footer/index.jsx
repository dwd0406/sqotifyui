import React from 'react';
import '../Footer/index.css';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid } from '@mui/material';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src={'https://cf.shopee.tw/file/3eb298e47e7c2fae8eb9e4098f1724da_tn'}
          alt={''}
        />
        <div className='footer__songInfo'>
          <h4>我問天2022</h4>
          <p>陳小權</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PauseCircleOutlineIcon
          fontSize='large'
          className='footer__icon'
        />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
