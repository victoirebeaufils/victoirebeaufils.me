import React from 'react';
import illustration from "../../images/illustration.gif"
import './project-banner.css';
const ProjectBanner = () =>{
return(
    <div className="container">
<div className="banner container-fluid">

<div className="row  d-flex h-100">
    <div className="col-lg-8 justify-content-center align-self-center product-info">
        <div className="row ">

            <div className="product-name">
                <h1 className="">Project 1</h1>
            </div>
            <div className="github-logo">
                    <span>
                       <a href="https://github.com/"> <i className="fab fa-github"></i></a>
                    </span>
                </div>
        </div>
        <div className="row">
            <div className="product-short-description">
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
        </div>
    </div>


    <div className="col-lg-4 product-illustration">
        <img className="img-fluid" src={illustration}alt="project image"></img>
    </div>
</div>
</div>
</div>
)

}
export default ProjectBanner;