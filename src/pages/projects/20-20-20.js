import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import ProjectBanner from "../../components/project-banner/project-banner"

const Project1Page = () => (
  <Layout>
      <ProjectBanner title="20-20-20" github="https://www.github.com/victoirebeaufils/20-20-20"
      description="A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds">

      </ProjectBanner>
      <div className="container">
           <div className="row technologies">
               <div className=""> <h3><span className="badge  badge-dark">React Native</span></h3>
               </div>
                <div className=""> <h3><span className="badge  badge-dark">JSX</span></h3>
                    </div>

          

            </div>
            <div className="row product-long-description">
                <h2>Overview</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Nisl vel pretium lectus quam id leo in. Mattis vulputate enim nulla aliquet porttitor
                                lacus luctus accumsan tortor.
                                Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Ante metus
                                dictum at tempor commodo ullamcorper.
                                In nisl nisi scelerisque eu. Hac habitasse platea dictumst vestibulum rhoncus est
                                pellentesque elit.
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Orci a
                                scelerisque purus semper eget duis at tellus at.
                                Mauris vitae ultricies leo integer. Est pellentesque elit ullamcorper dignissim cras
                                tincidunt.
                                Senectus et netus et malesuada fames ac turpis. Sed elementum tempus egestas sed sed
                                risus pretium quam.</p>
            </div>
    
<div className=" milestones">
    <div className="row">
        <h2>Milestones</h2>
    </div>
        <div className="row">
            
        <ul className="timeline">
            <li>
                <h5> Milestone 1</h5>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">New website</h4>
                      
                        <div className="card-text">  <h6>October 17, 2019</h6>A renovation project with features such as responsiveness, accessibility and a minimalistic theme</div>
                    
                      </div>
                      </div>
              </li>
          <li>
            <h5> Dec 30, 2018</h5>
                <div className="card" >
    
                  <div className="card-body">
                    <h4 className="card-title">Coal and the environment</h4>
                    <p className="card-text">Photographs series depicting my relationship with climate change issues.</p>
                
                  </div>
                </div>
          </li>
          <li>
            <h5> Dec 23, 2018</h5>
                <div className="card">

                  <div className="card-body">
                    <h4 className="card-title">Webule</h4>
                    <p className="card-text">Web-based interactive and shareable schedule</p>
        
                  </div>
                </div>
          </li>
        </ul>
    </div>
</div>

    <div>  <h2>Extra features</h2>
        <p> These features might be added in the near future. </p>
        <ul>
            <li><p>Feature 1</p></li>
            <li><p>Feature 2</p></li>
            <li><p>Feature 3</p></li>
            <li><p>Feature 4</p></li>
        </ul>
    </div>
    </div>

   
  </Layout>)

  export default Project1Page;