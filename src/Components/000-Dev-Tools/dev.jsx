import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './dev.css'
import warning from './warning.png'

  export default function DevBanner() {

    const banner = () => {
      if(process.env.NODE_ENV){
        return (
          <p className='devBanner'>

          <img src={warning} alt=''/>

          You are currently running in <span className='env'>{process.env.NODE_ENV}</span> mode.

          </p>
        )
      }
    }

    return (
      <>
      {banner()}
      </>
    )
  }
