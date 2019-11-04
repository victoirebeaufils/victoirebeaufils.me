import React from 'react';
import {Link } from 'gatsby';
import illustration from "../../images/illustration.gif";

const ProjectCard = (props) =>{
    return (
        <div className="project">
             <img className="img-fluid" src={illustration} alt="project image"/>
                   
                   <h2>{props.title} </h2>
                   <h4 className="technologies-used">{props.technologies}</h4>
                   <p className="project-description"> {props.description}</p>
                       <button type=" button " className="btn btn-primary "><Link to={props.link}> Check out project</Link> </button>
        </div>
    )
}
export default ProjectCard;