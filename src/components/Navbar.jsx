import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">REACT MOVIE APP</Link>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">CREATE ACCOUNT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/films">FILMS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lists">LISTS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/members">MEMBERS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/journal">JOURNAL</Link>
            </li>
          </ul>
          <form className="search-bar">
            <input className="search-bar-input" type="search" />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar