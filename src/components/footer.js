import { Link } from "gatsby"
import React from "react"
import {GoMarkGithub} from 'react-icons/go'
const Footer = () =>{
  return (
    <div className="footer">
        <div className="row">
            <div className="col">
                <Link to ="/projects/"><b>Latest projects</b></Link><br/>
                <Link to="./projects/piano-map" >Pianomap</Link><br/>
                <Link to="/projects/GlobalVision" >Global Vision</Link><br/>
                <Link to="/projects/DBTool" >DBTool</Link><br/>
                <Link to="/projects/mental-illnesses-d3" >Scientific interest in mental illnesses</Link>
            </div>
            <div className="col">
                <a href="about.html"><b>Contact</b></a>
                <br/>
                <a>Victoire Beaufils<br/>vbeaufil@purdue.edu</a>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
                <br/>
                <a className="text-center" > Copyright © 2021 Victoire Beaufils </a>
            </div>
            <div className="col-lg-3 ">
                <br></br>
            </div>
        </div>
    </div>

  )}

  export default Footer;