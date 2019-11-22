import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import '../components/project-card/project-card.css'
import ProjectCard from '../components/project-card/project-card'
import SearchBar from '../components/search-bar'
import mentalIllnessIcon from "../images/mentalillness-icon.jpg";
import placeholder from "../images/illustration.gif";
const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="container projects">
        <h2 className="text-center"> Projects </h2>
        <div className="col-lg-4 offset-lg-4">
           {/*<SearchBar/>*/}
        </div>

        <div className="row other-projects justify-content-md-center">
                <div className="col-lg-6 other-project-left">
                <ProjectCard title ="Scientific interest in mental illnesses" technologies="React / D3.js / Highcharts"
                description="I tried to depict the scientific interest in mental illnesses by retrieving datafrom the U.S
                 National Library of medicine. I searched 36 databases for the selected queries that
                  I think best cover the most prominent mental illnesses. " link ="projects/mental-illnesses-d3" illustration={mentalIllnessIcon}/>
                   
                </div>
             {/*   <div className="col-lg-6 other-project-right">
                <ProjectCard title ="Project 1" technologies="HTML / CSS / Javascript"
                    description = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Orci a
                    scelerisque purus semper eget duis at tellus at.
                    Mauris vitae ultricies leo integer. Est pellentesque elit ullamcorper dignissim cras
                    tincidunt.
                    Senectus et netus et malesuada fames ac turpis. Sed elementum tempus egestas sed sed
                    risus pretium quam."link ="projects/project1"github = "https://www.github.com/victoirebeaufils" illustration={placeholder}/>
</div>*/}

    </div>
    </div>
  </Layout>
)

export default ProjectPage;