import React from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >

      <Link className="navbar-brand" to="/">{props.heading}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


          <div className="custom-control custom-switch mx-3">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
            <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
          </div>

        </form>

      </div>

    </nav>
  )
}

// "propTypes" ensure that correct datatype is passed in props object
Navbar.propTypes = {
  // heading: PropTypes.string,
  heading: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

// set default props using the bizzare method "defaultProps"
Navbar.defaultProps = {
  heading: "Set Heading here",
  aboutText: `About`
}
