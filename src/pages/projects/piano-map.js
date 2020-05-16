import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import pianoMapIcon from "../../images/pianomap-icon.jpg";
import ProjectBanner from "../../components/project-banner/project-banner"

const PianoMapPage = () => (
  <Layout>
      <ProjectBanner title="Piano map" github="https://www.github.com/victoirebeaufils/pianomap"
      description="A map of public pianos around the world based on user contributions" illustration={pianoMapIcon}
      status="Work in progress"
      date="March 26, 2020">

      </ProjectBanner>
      <div className="container">
           <div className="row technologies">
               <div className=""> <h3><span className="badge  badge-dark">MongoDB</span></h3> </div>
                <div className=""> <h3><span className="badge  badge-dark">Express</span></h3></div>
                <div className=""> <h3><span className="badge  badge-dark">Node.js</span></h3></div>
                <div className=""> <h3><span className="badge  badge-dark">React</span></h3></div>
                <div className=""> <h3><span className="badge  badge-dark">Maps API</span></h3></div>

          

            </div>
            <div className="row product-long-description">
                <h2>Overview</h2>
            <p>I wanted to create a map on piano based on user contributions, creating a CRUD application with user profiles, contributions and a login form. </p>
            </div>
    
</div>
   
  </Layout>)

  export default PianoMapPage;