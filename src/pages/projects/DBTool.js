import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectBanner from "../../components/project-banner/project-banner"
import DBToolIcon from "../../images/DBTool-icon.jpg"
const DBToolPage = () => (
  <Layout>
    <ProjectBanner title="DBTool" github="https://github.com/victoirebeaufils/dbtool" description= "Created an app to serve as a tool and a library of resources for Dialectic Behavioral Therapy (DBT)"
  status="Incomplete" illustration={DBToolIcon} date= "Feb 28, 2021" website="https://xd.adobe.com/view/5e83de00-a097-4d84-6ae7-8999a7b7d001-28b2/"
  github="https://github.com/victoirebeaufils/dbtool">

    </ProjectBanner>
   <div className="container">
      <br />
      <hr />

      <div className="row technologies">
        <div className=""> <h5><span className="badge  badge-dark react-native-badge">React Native</span></h5>
        </div>
        <div className=""> <h5><span className="badge  badge-dark jsx-badge">JSX</span></h5></div>
        <div className=""> <h5><span className="badge  badge-dark jsx-badge">UI/UX</span></h5>
        </div>
      </div>
      <br />
      <p>Not all links have been integrated, so it is possible that you will find yourself stuck. To better visualize the screens, click  
        <a href="https://xd.adobe.com/view/5e83de00-a097-4d84-6ae7-8999a7b7d001-28b2/"> this link</a>.
      </p>
      <iframe width="375" height="812" src="https://xd.adobe.com/embed/5e83de00-a097-4d84-6ae7-8999a7b7d001-28b2/" frameborder="0" allowfullscreen></iframe>
     

     </div>


  </Layout>)

export default DBToolPage;