import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../components/about.css"
import  picture from "../images/picture.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About | Victoire Beaufils" />
    <div className="container">
            <div className="row about-me">
                <div className="col-lg-9 ">
                    <h2> About me </h2>
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
                <div className=" col-lg-3 justify-content-center align-self-center">
                    <img className="img-fluid icon" src = {picture} alt="The picture of the website creator"/>
            </div>
            </div>

        <p> Here is my other website : <a href="instagram.com">www.instagram.com</a></p>

        <div className="row contact-me">
       
               
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
            </div>

            <div className="col-lg-6"></div>
                 
        </div>
  </Layout>
)

export default AboutPage;