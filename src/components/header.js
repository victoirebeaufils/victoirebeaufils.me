import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe } from '@fortawesome/fontawesome-free-solid'
import {GoMarkGithub} from 'react-icons/go'
import icon from "../images/icon.png"
import "../components/header.css"
const Header = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
           <Link className="navbar-brand" to="../"><img src={icon} className="img-fluid logo" alt="logo within navbar"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    
                  <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                      <Link className="nav-link" to="../projects">Projects </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="../about">About</Link>
                    </li>
                    {/*<li className="nav-item">
                    <a className="social-media-link" href="https://github.com/" style={{textAlign: "center"}}><GoMarkGithub/></a>
  </li>*/}
                    {/*<li className="nav-item">
                      <Link className="nav-link " to="../blog">Blog</Link>
  </li>*/}

                    {/*
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="globe" /></a>
                      <div className="dropdown-menu" aria-labelledby="dropdown03">
                        
                                                <a className="dropdown-item" href="fr/index.html"><span
                                                    className="flag-icon flag-icon-fr"></span>  French</a>
                                                <a className="dropdown-item" href="index.html"><span
                                                    className="flag-icon flag-icon-us"></span>  English</a>
                                                <a className="dropdown-item" href="es/index.html"><span
                                                    className="flag-icon flag-icon-es"></span>  Spanish</a>
                                
                      </div>
                    </li>*/}
                  </ul>
                </div>
           </div>
        </nav>
)
}
export default Header;
