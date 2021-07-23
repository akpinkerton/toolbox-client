import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div><Link to="/"> Home</Link></div>
          <div><Link to="/sandbox"> Sandbox</Link></div>
          <div><Link to="/resources"> Resources</Link></div>
          <div><Link to="/readinglist"> Reading List</Link></div>
          <div><Link to="/templates"> Templates</Link></div>
          <div><Link to="/cheatsheets"> Cheatsheets</Link></div>
          <div><Link to="/admin"> Account Settings</Link></div>
        </div>
      </nav>
    )
  }
