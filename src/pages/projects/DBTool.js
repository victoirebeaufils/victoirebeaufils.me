import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectBanner from "../../components/project-banner/project-banner"

const DBToolPage = () => (
  <Layout>
  {/*}  <ProjectBanner title="20-20-20" github="https://www.github.com/victoirebeaufils/20-20-20" date="December 30, 2019"
      description="A React Native app to reduce eye strain following the 20-20-20 rule : Every 20 minutes, look 20 feet in the distance for 20 seconds"
      illustration={} status="Incomplete">

    </ProjectBanner>
*/}    <div className="container">
      <br />
      <hr />

      <div className="row technologies">
        <div className=""> <h5><span className="badge  badge-dark react-native-badge">React Native</span></h5>
        </div>
        <div className=""> <h5><span className="badge  badge-dark jsx-badge">JSX</span></h5>
        </div>
      </div>
      <br />
      
      <div className="row product-long-description">
        <h2>Overview</h2>
        <p>I wanted to create an app baased on Dialectic and Behavioral Therapy (DBT). I provided information about the 4 modules and skills used in DBT and  </p>

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
                   {/* <img src={} class="img-responsive "></img> */}
                  </div>
                  <div class="col-lg-6">
                   {/* <img src={} class="img-responsive"></img> */}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                  {/*  <img src={} class="img-responsive "></img> */}
                  </div>
                  <div class="col-lg-6">
                   {/* <img src={} class="img-responsive "></img> */}
                  </div>
                  <div class="row">
                    <div class="col">
                     {/* <img src={} class="img-responsive "></img>*/}

                    </div>
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
              <a> <input type="checkbox" class="form-check-input" checked ></input> Created all screens <br /></a>
              <a> <input type="checkbox" class="form-check-input" checked></input> Made a timer<br /> </a>
              <a> <input type="checkbox" class="form-check-input" ></input> Set up push notifications  <br /></a>
              <a> <input type="checkbox" class="form-check-input" ></input> Find a way to make the alarm ring  <br /></a>
              <hr/>
              <h6> Extra user experience features</h6>
              <a> <input type="checkbox" class="form-check-input"  ></input>Modify timer circle so that its contour dimimishes as seconds pass <br /></a>
              <a> <input type="checkbox" class="form-check-input"  ></input>Take the user directly to the next page after the timer is done 
              instead of having them click a button <br /></a>

              <hr/>
              <h6> Features that are way out of the scope of this project but could be implemented in others </h6>
              <a> <input type="checkbox" class="form-check-input"  ></input>Modify timer circle so that its contour dimimishes as seconds pass <br /></a>
              <a> <input type="checkbox" class="form-check-input"  ></input>Take the user directly to the next page after the timer is done 
              instead of having them click a button <br /></a>
            </div>
          </div>
        </div>

      </div>
    </div>


  </Layout>)

export default DBToolPage;