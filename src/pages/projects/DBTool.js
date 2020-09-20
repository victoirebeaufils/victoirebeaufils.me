import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectBanner from "../../components/project-banner/project-banner"

const DBToolPage = () => (
  <Layout>
  {  <ProjectBanner title="DBTool" github="https://github.com/victoirebeaufils/dbtool" description= "Tool for Dialectic Behavioral Therapy (DBT)"
  status="Incomplete">

    </ProjectBanner>
}    <div className="container">
      <br />
      <hr />

      <div className="row technologies">
        <div className=""> <h5><span className="badge  badge-dark react-native-badge">React Native</span></h5>
        </div>
        <div className=""> <h5><span className="badge  badge-dark jsx-badge">JSX</span></h5>
        </div>
      </div>
      <br />
      <iframe width="207" height="500" src="https://xd.adobe.com/embed/c908592a-2a8c-4845-6a4f-901d0a1961c1-bf39/" frameborder="0" allowfullscreen></iframe>
     

     </div>


  </Layout>)

export default DBToolPage;