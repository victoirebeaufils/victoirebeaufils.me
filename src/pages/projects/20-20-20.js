import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Icon202020 from "../../images/20-20-20-icon.jpg";
import ProjectBanner from "../../components/project-banner/project-banner"

const twentyTwentyTwentyPage = () => (
  <Layout>
      <ProjectBanner title="20-20-20" github="https://www.github.com/victoirebeaufils/20-20-20" date="December 30, 2019"
      description="A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds"
      illustration={Icon202020}>

      </ProjectBanner>
      <div className="container">
           <div className="row technologies">
               <div className=""> <h5><span className="badge  badge-dark">React Native</span></h5>
               </div>
                <div className=""> <h5><span className="badge  badge-dark">JSX</span></h5>
                    </div>

          

            </div>
            <div className="row product-long-description">
                <h2>Overview</h2>
            <p>This app's purpose is to reduce eye strain by sending alerts every 20 minutes and using a series of countdowns to ensure proper eye rest.
              Because React Native depends a lot on libraries, I've been struggling with push notifications and allowing the application to play sound.
            </p>
            </div>
</div>
       

   
  </Layout>)

  export default twentyTwentyTwentyPage ;