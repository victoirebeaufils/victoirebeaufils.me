import React from "react";
import {Link } from 'gatsby'
import Layout from '../components/layout/layout';
import ProjectBanner from '../components/project-banner/project-banner'
import ProjectCard from '../components/project-card/project-card'
import '../components/project-card/project-card.css'
import SEO from "../components/seo"
import mentalIllnessIcon from "../images/mentalillness-icon.jpg";
import Icon202020 from "../images/20-20-20-icon.jpg";
import PianoMapIcon from "../images/pianomap-icon.jpg";
import globalVisionIcon from "../images/globalVision-icon.jpg"
const indexPage = () =>{
    const globalVision = 
    <ProjectCard title ="Global vision" 
  technologies="Flask / CDS API (Copernicus data) / ArcGIS"
  description="A 3D map representation of water body temperatures as measured by some of the Copernicus sentinels" 
  link ="/projects/GlobalVision" 
  illustration={globalVisionIcon}/>
    return(

           <Layout>
                <SEO title="Home" />
                <ProjectBanner title="Piano map" 
      description="A map of public pianos around the world based on user contributions"
      illustration={PianoMapIcon}  page="index" date="March 26, 2020"
      link="projects/piano-map" github = "https://www.github.com/victoirebeaufils/pianomap"/>
            <div className="container">
        <div className="row other-projects justify-content-md-center">
<div className="col-lg-6 other-project-left"> 
{globalVision}
</div>

<div className="col-lg-6 other-project-right">

                <ProjectCard title ="Scientific interest in mental illnesses" 
                technologies="React / Highcharts"
                description="I tried to depict the scientific interest in mental illnesses by retrieving datafrom the U.S
                 National Library of medicine. I searched 36 databases for the selected queries that
                  I think best cover the most prominent mental illnesses. " 
                link ="projects/mental-illnesses" 
                illustration={mentalIllnessIcon}/>
                   
                </div>


</div>
         
         </div> 
            <div class="d-flex justify-content-center see-more">
            <button type="button" class=" project-link btn btn-hollow"><Link to = "/projects" >See more projects</Link></button>
            </div>
           </Layout>
            
        
    )
}
export default indexPage;