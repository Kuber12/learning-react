import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  
  const [modeText,setModeText] = useState("Enable Dark Mode");
  useEffect(() => {
    // This effect will run after the initial render and whenever `props.mode` changes
    if (props.mode === "light") {
      setModeText('Disable Light mode');
    } else {
      setModeText('Enable Dark Mode');
    }
  }, [props.mode]); // Include `props.mode` as a dependency here
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="form-check form-switch"> 
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
            <label className={`form-check-label text-${props.mode === "dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{modeText}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string
}

Navbar.defaultProps = {
    title:"Home",
    aboutText:"About Us"
}