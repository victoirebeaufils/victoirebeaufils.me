import React from "react";
import Layout from '../components/layout/layout';
import ProjectBanner from '../components/project-banner/project-banner'
import ProjectCard from '../components/project-card/project-card'
import '../components/project-card/project-card.css'
import SEO from "../components/seo"
import mentalIllnessIcon from "../images/mentalillness-icon.jpg";
import Icon202020 from "../images/20-20-20-icon.jpg";
import PianoMapIcon from "../images/pianomap-icon.jpg";
const indexPage = () =>{
    return(
        
           <Layout>
                <SEO title="Home" />
                <ProjectBanner title="Scientific interest in mental illnesses" 
      description="I tried to depict the scientific interest in mental illnesses by retrieving data from the U.S National Library of medicine. I searched 36 databases for the selected queries that I think best cover the most prominent mental illnesses. "
      illustration={mentalIllnessIcon}  page="index" date="November 22, 2019"
      link="projects/mental-illnesses"/>
            <div className="container">
        <div className="row other-projects justify-content-md-center">
<div className="col-lg-6 other-project-left"> <ProjectCard title ="20-20-20" technologies="React Native / JSX"
                    description = "A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds"
                    link ="projects/20-20-20" github = "https://www.github.com/victoirebeaufils/20-20-20" illustration={Icon202020}/>

</div>

<div className="col-lg-6 other-project-right">

<ProjectCard title ="Piano map" technologies="MongoDB / Express / Node / React / Maps API"
                    description = "A map of public pianos around the world based on user contributions"
                    link ="projects/piano-map"
                    illustration={PianoMapIcon}
                    github = "https://www.github.com/victoirebeaufils/pianomap"/>
                    
    </div>

</div>
</div>
            </Layout>
            
        
    )
}
export default indexPage;