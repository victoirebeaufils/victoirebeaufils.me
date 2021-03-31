import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../components/about.css"
import  picture from "../images/picture.png"
import {withPrefix} from 'gatsby'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
            <div className="row about-me">
                <div className="col-lg-9 ">
                    <h2> About me </h2>
                        <p>I'm an undergraduate student in Computer Science at Purdue University. My interests withing the field of Computer Science are Education, Psychology, Accessibility and Computational neuroscience.
                        </p>
                        <p>I like climbing, photography, baking and making music.</p>
                        <p> I am currently working on Purdue's freshman-only hackathon's website.</p>
                        <p> In my free time, I am involved with <a class="link" href="https://colorsofconnection.org/">Colors of Connection</a> as I help them translate mission-statement documents. I am also the PR Director for the <a class="link" href="https://purduewebdev.club/home">Purdue Web Dev Club</a>.</p>
                        <p>
                        <a 
                        class="link"
                        rel="noopener noreferrer"
                        href={withPrefix('/resume_feb_2021.pdf')}
                        target="_blank">Resume</a> | 
                        <a  class="link" href="https://www.linkedin.com/in/victoirebeaufils/"> Linkedin</a> |
                        <a  class="link" href="https://www.github.com/victoirebeaufils"> Github</a> | 
                        <a  class="link" href="mailto:vbeaufil@purdue.edu"> vbeaufil@purdue.edu</a></p>
                </div>
                <div className=" col-lg-3 justify-content-center align-self-center">
                    <img className="img-fluid icon" src = {picture} alt="Victoire Beaufils"/>
            </div>
            </div>

        {/*<div className="row contact-me">
       
               
            <div className="col-lg-6">
                    <h2 >Contact me</h2>
                    <div className="form-group">
                            <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Enter name"/>
                          </div>
                    <div className="form-group">
                            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
                          </div>
                    <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Write message..."></textarea>
                     </div>
                     </div>
</div>*/}

            <div className="col-lg-6"></div>
                 
        </div>
  </Layout>
)

export default AboutPage;