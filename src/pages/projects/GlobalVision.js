
import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectBanner from "../../components/project-banner/project-banner"
import globalVisionIcon from "../../images/globalVision-icon.jpg"

const GlobalVisionPage = () => (
    <Layout>
        <ProjectBanner title="Global Vision" github="https://github.com/victoirebeaufils/globalVision"
            description="A 3D map representation of water body temperatures as measured by some of the Copernicus sentinels" illustration={globalVisionIcon}
            status="Complete"
            date="Jan 24, 2021"
            website="https://stormy-sands-61487.herokuapp.com/index.html">

        </ProjectBanner>
        <div className="container">
        <br/>
          <hr/>
            <div className="row technologies">
                <div className=""> <h5><span className="badge badge-dark">Flask</span></h5></div>
                <div className=""> <h5><span className="badge  badge-dark ">ArcGIS</span></h5></div>
                <div className=""> <h5><span className="badge  badge-dark">CDS API</span></h5></div>



            </div>
            <br/>
            <div className="row product-long-description">
                <h2>Overview</h2>
                <p>Me and <a href="https://github.com/SamuelAtPurdue" >Sam Hild </a> wanted to create some water measurement tool based on satellite data to compete in the Boilermake hackathon for the best eco hack presented by Eco Lab. </p>

                <div class="step">
                    <div>
                        <div class="circle">1</div>
                        <div class="line"></div>
                    </div>
                    <div>
                        <div class="title">I made a Mockup of the website with Adobe XD</div>
                        <div class="body">
                            <a> <input type="checkbox" class="form-check-input" checked ></input> Created routes, Middleware and Models for places and users <br/></a>
                            <a> <input type="checkbox" class="form-check-input" checked></input> Created the frontend for pages above and extra pages for user profiles<br/> </a>
                            <a> <input type="checkbox" class="form-check-input" checked></input> Finished the authentification system using jwt (Jan 26, 2021)<br/></a>
                            <a> <input type="checkbox" class="form-check-input"></input> Connected piano entered by the user to location database (ongoing)<br/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    </Layout>)

export default GlobalVisionPage;

