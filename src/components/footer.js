import { Link } from "react-router-dom"
import React from "react"
import {GoMarkGithub} from 'react-icons/go'
const Footer = () =>{
  return (
    <div className="footer">
    <div className="row">
        <div className="col">
            <Link to ="/projects/"><b>Latest projects</b></Link><br/>
            <p><Link to="./projects/piano-map" >Pianomap</Link><br/>
            <Link to="/projects/GlobalVision" >Global Vision</Link><br/>
            <Link to="/projects/DBTool" >DBTool</Link><br/>
            <Link to="/projects/mental-illnesses-d3" >Scientific interest in mental illnesses</Link></p>
        </div>
        <div className="col">
            <a href="about.html"><b>Contact</b></a>
            <p>Victoire Beaufils<br/>vbeaufil@purdue.edu</p>
        </div>
    </div>
    <hr/>
    <div className="row">
        <div className="col-lg-3">
        </div>
        <div className="col-lg-6">
            <br/>
            <p className="text-center" > Copyright © 2021 Victoire Beaufils </p>
        </div>
        <div className="col-lg-3 ">
            <br/>
           {/* <a className="social-media-link" href="https://github.com/"><GoMarkGithub/></a>
            <a className="social-media-link" href="https://www.linkedin.com/in/"><i
                    className="fab fa-linkedin fa-2x"></i></a>
            <a className="social-media-link" href="https://stackoverflow.com/"><i
                    className="fab fa-stack-overflow fa-2x"></i></a>
  */}</div>
    </div>
    </div>
  )}

  export default Footer;