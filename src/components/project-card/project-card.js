import React from 'react';
import {Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

const ProjectCard = (props) =>{
  
    return (
        <div className="project">
             <img className="img-fluid" src={props.illustration} alt="project image"/>
             <div className="product-name">
                   <h2>{props.title} </h2>
                   </div>
                   <h4 className="technologies-used">{props.technologies}</h4>
                   <p className="project-description"> {props.description!=null? props.description : "This project does not have a description yet"}</p>
                   <div class="row">
                   {props.github!=null? <button type=" button " className="btn btn-dark project-link" ><a href={props.github}> Github</a> </button> : null}
                      
                       <button type=" button " className="btn btn-primary project-link" ><Link to={props.link}> Check out project</Link> </button>
                       </div>
        </div>
    )
}
export default ProjectCard;