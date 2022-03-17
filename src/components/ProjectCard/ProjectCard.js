import { Link } from 'gatsby';
import React from 'react';
import {GoArrowSmallLeft, GoLogoGithub} from 'react-icons/go'
const ProjectCard = props => {
    return (
        <div>
          <button><a href="https://github.com/victoirebeaufils/">GITJUB{GoLogoGithub}</a></button>
            {GoArrowSmallLeft}
        </div>
    );
};


export default ProjectCard;