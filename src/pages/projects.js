import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import '../components/project-card/project-card.css'
import ProjectCard from '../components/project-card/project-card'
import SearchBar from '../components/search-bar'
import mentalIllnessIcon from "../images/mentalillness-icon.jpg";
import Icon202020 from "../images/20-20-20-icon.jpg";
import PianoMapIcon from '../images/pianomap-icon.jpg';
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
                <ProjectCard title ="Scientific interest in mental illnesses" 
                technologies="React / Highcharts"
                description="I tried to depict the scientific interest in mental illnesses by retrieving datafrom the U.S
                 National Library of medicine. I searched 36 databases for the selected queries that
                  I think best cover the most prominent mental illnesses. " 
                link ="projects/mental-illnesses" 
                illustration={mentalIllnessIcon}/>
                   
                </div>
                <div className="col-lg-6 other-project-right">
                <ProjectCard 
                title ="20-20-20" 
                technologies="React Native / JSX"
                description = "A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds"
                github = "https://www.github.com/victoirebeaufils/20-20-20" 
                illustration={Icon202020}
                link ="projects/20-20-20" />
</div>
                  <div className="row other-projects justify-content-md-center">
                  <div className="col-lg-6 other-project-left">
                <ProjectCard title ="Piano map" 
                technologies="MongoDB / Express / Node / React / Maps API"
                description="A map of public pianos around the world based on user contributions" 
                illustration={PianoMapIcon}/>
                   
                </div>
                <div className="col-lg-6 other-project-right">
               {/*} <ProjectCard 
                title ="20-20-20" 
                technologies="React Native / JSX"
                description = "A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds"
                github = "https://www.github.com/victoirebeaufils/20-20-20" 
                illustration={Icon202020}
                  link ="projects/piano-map" />*/}
                  </div>
                  </div>
                  </div>

    </div>
  </Layout>
)

export default ProjectPage;