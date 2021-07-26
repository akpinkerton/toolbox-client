import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  export default function Navbar() {
    return (

<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div class="container-fluid">
    <h3>Toolbox</h3>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/"> Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/resources"> Resources</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/readinglist"> Research List</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/templates"> Templates</Link>
        </li>

        {/* <li class="nav-item">
          <Link class="nav-link" to="/cheatsheets"> Cheatsheets</Link>
        </li> */}

        <li class="nav-item ">
          <Link class="nav-link" to="/admin"><i class="fas fa-cogs"></i></Link>
        </li>

      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
  }
