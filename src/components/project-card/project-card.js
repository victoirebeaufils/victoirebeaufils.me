import React from 'react';
import {Link } from 'gatsby';
import illustration from "../../images/illustration.gif";

const ProjectCard = () =>{
    return (
        <div className="project">
             <img className="img-fluid" src={illustration} alt="project image"/>
                   
                   <h2>Project 1 </h2>
                   <h4 className="technologies-used">HTML / CSS / Javascript</h4>
                   <p className="project-description"> Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Orci a
                       scelerisque purus semper eget duis at tellus at.
                       Mauris vitae ultricies leo integer. Est pellentesque elit ullamcorper dignissim cras
                       tincidunt.
                       Senectus et netus et malesuada fames ac turpis. Sed elementum tempus egestas sed sed
                       risus pretium quam.</p>
                       <button type=" button " className="btn btn-primary "><Link to="projects/project1"> Check out project</Link> </button>
        </div>
    )
}
export default ProjectCard;