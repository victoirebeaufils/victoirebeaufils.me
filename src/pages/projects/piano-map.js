import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import pianoMapIcon from "../../images/pianomap-icon.jpg";
import ProjectBanner from "../../components/project-banner/project-banner"
import mockup1 from '../../images/pianomap/mockup1.png'
import mockup2 from '../../images/pianomap/mockup2.png'
import mockup3 from '../../images/pianomap/mockup3.png'
import mockup4 from '../../images/pianomap/mockup4.png'

const PianoMapPage = () => (
    <Layout>
        <ProjectBanner title="Piano map" github="https://www.github.com/victoirebeaufils/pianomap"
            description="A map of public pianos around the world based on user contributions" illustration={pianoMapIcon}
            status="Work in progress"
            date="March 26, 2020">

        </ProjectBanner>
        <div className="container">
        <br/>
          <hr/>
            <div className="row technologies">
                <div className=""> <h5><span className="badge  badge-dark mongo-db-badge">MongoDB</span></h5> </div>
                <div className=""> <h5><span className="badge  badge-dark express-badge">Express</span></h5></div>
                <div className=""> <h5><span className="badge  badge-dark node-js-badge">Node.js</span></h5></div>
                <div className=""> <h5><span className="badge  badge-dark react-badge">React</span></h5></div>
                <div className=""> <h5><span className="badge  badge-dark">Maps API</span></h5></div>



            </div>
            <br/>
            <div className="row product-long-description">
                <h2>Overview</h2>
                <p>I wanted to create a map on piano based on user contributions, creating a CRUD application with user profiles, contributions and a login form. </p>

                <div class="step">
                    <div>
                        <div class="circle">1</div>
                        <div class="line"></div>
                    </div>
                    <div>
                        <div class="title">I made a Mockup of the website with Adobe XD</div>
                        <div class="body">

                            <div class="img-container">
                                <div class="row">
                                    <div class="col-lg-6">
                                    <img src={mockup1} class="img-responsive "></img>
                                    </div>
                                    <div class="col-lg-6">
                                <img src={mockup2} class="img-responsive col-lg-6"></img>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-lg-6">
                                    <img src={mockup3} class="img-responsive col"></img>
                              </div>
                              <div class="col-lg-6">
                                    <img src={mockup4} class="img-responsive col"></img>
                              </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    </div>
                    <div class="step">
                        <div>
                            <div class="circle">2</div>
                            <div class="line"></div>
                        </div>
                        <div>
                        <div class="title"> What's next? </div>
                        <div class="body">
                            <h6> I started working on the backend (MERN Stack)</h6>
                            <a> <input type="checkbox" class="form-check-input" checked ></input> Created routes, Middleware and Models for places and users <br/></a>
                            <a> <input type="checkbox" class="form-check-input" checked></input> Created the frontend for pages above and extra pages for user profiles<br/> </a>
                            <a> <input type="checkbox" class="form-check-input" ></input> Finished the authentification system using jwt <br/></a>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    </Layout>)

export default PianoMapPage;