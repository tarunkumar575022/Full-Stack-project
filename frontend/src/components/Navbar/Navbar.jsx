import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'; 

const Navbar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid navBar">
    <Link to="/" class="navbar-brand">Mern</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/create" class="nav-link active" aria-current="page">Create Posts</Link>
        </li>
        <li class="nav-item">
          <Link to="/all" class="nav-link">All posts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
