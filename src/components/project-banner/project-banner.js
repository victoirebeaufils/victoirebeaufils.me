import React from 'react';
import {Link } from 'gatsby';
import illustration from "../../images/illustration.gif"
import './project-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
const ProjectBanner = (props) =>{
return(
    <div className="container">
<div className="banner container-fluid">

<div className="row  d-flex h-100">
    <div className="col-lg-8 justify-content-center align-self-center product-info">
        <div className="row ">

          
                <h1 className="banner-title">{props.title}</h1>
        
            </div>
         
        <div className="row">
      
            <div className="product-short-description">
             
            <h6>{props.date!=null?props.date:null}</h6>
            <p className="status">{props.status? "Status: " + props.status :null}
           </p>

                <p class="description">{props.description!=null? props.description : "This project does not have a description yet"}
                  </p>
            </div>
        </div>
        <div className="product-links">
        {props.github!=null? <button type=" button " className="btn btn-dark btn-github project-link" ><a href={props.github}> Github</a> </button> : null}
                      
                      
                {props.page!=null? (props.page==="index"? <button type=" button " className="btn btn-primary project-link" ><Link to={props.link}> Check out project</Link> </button>: null) :null}
                </div>
    </div>


    <div className="col-lg-4 product-illustration">
        <img className="img-fluid" src={props.illustration}alt="project image"></img>
    </div>
</div>
</div>
</div>
)

}
export default ProjectBanner;