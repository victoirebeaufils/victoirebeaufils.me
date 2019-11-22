import React from "react";
import Layout from '../components/layout/layout';
import ProjectBanner from '../components/project-banner/project-banner'
import ProjectCard from '../components/project-card/project-card'
import '../components/project-card/project-card.css'
import SEO from "../components/seo"
import mentalIllnessIcon from "../images/mentalillness-icon.jpg";
import placeholder from "../images/illustration.gif";
const indexPage = () =>{
    return(
        
           <Layout>
                <SEO title="Home" />
                <ProjectBanner title="Scientific interest in mental illnesses" 
      description="I tried to depict the scientific interest in mental illnesses by retrieving data from the U.S National Library of medicine. I searched 36 databases for the selected queries that I think best cover the most prominent mental illnesses. "
      illustration={mentalIllnessIcon}  page="index" date="November 22, 2019"/>
            <div className="container">
        <div className="row other-projects justify-content-md-center">

{/*<div className="col-lg-6 other-project-left">
<ProjectCard title ="Scientific interest in mental illnesses" technologies="React / D3.js / Highcharts"
                description="I tried to depict the scientific interest in mental illnesses by retrieving data from the U.S
                 National Library of medicine. I searched 36 databases for the selected queries that
                  I think best cover the most prominent mental illnesses. " github="https://www.github.com/victoirebeaufils" link ="projects/mental-illnesses-d3"illustration={mentalIllnessIcon}/>

</div>
<div className="col-lg-6 other-project-right">
<ProjectCard title ="Project 1" technologies="HTML / CSS / Javascript"
                    description = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Orci a
                    scelerisque purus semper eget duis at tellus at.
                    Mauris vitae ultricies leo integer. Est pellentesque elit ullamcorper dignissim cras
                    tincidunt.
                    Senectus et netus et malesuada fames ac turpis. Sed elementum tempus egestas sed sed
                    risus pretium quam."link ="projects/project1"illustration={placeholder}/>
    </div>*/}

</div>
</div>
            </Layout>
            
        
    )
}
export default indexPage;