import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './braindump.css'

  export default function Braindump() {

    return (
      <>
THIS IS MY BRAIN DUMP

<p>You are currently running in {process.env.NODE_ENV} mode.</p>

      </>
    )
  }
