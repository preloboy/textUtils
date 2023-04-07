import React from 'react'
// import { Link } from 'react-router-dom'

// Declare a functional component called "Nav" and pass in "props" as its parameter
export default function Navbar(props) {
  // Render a navigation bar with Bootstrap classes and styles
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary text-${props.mode === 'light' ? 'dark' : 'light'}`} data-bs-theme={props.mode}>
      <div className="container-fluid">
        <div className='d-flex flex-row'>
          {/* Render the navbar toggle button */}
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Render the navbar brand and set its text to the "title" prop */}
          {/* <Link className="navbar-brand mx-3" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">{props.title}</a>
        </div>
        {/* Render the navbar menu with navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
        </div>
        {/* Render the dark mode switch and set its state based on the "mode" prop */}
        <div className={`my-1 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}
