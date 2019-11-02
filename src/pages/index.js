import React from "react";
import Layout from '../components/layout/layout';
import ProjectBanner from '../components/project-banner/project-banner'
import ProjectCard from '../components/project-card/project-card'
import '../components/project-card/project-card.css'
import SEO from "../components/seo"
const indexPage = () =>{
    return(
        
           <Layout>
                <SEO title="Home | Victoire Beaufils" />
             <ProjectBanner/>
            <div className="container">
        <div className="row other-projects justify-content-md-center">

<div className="col-lg-6 other-project-left">
    <ProjectCard page="index"/>
</div>
<div className="col-lg-6 other-project-right">
<ProjectCard  page="index"/>
</div>

</div>
</div>
            </Layout>
            
        
    )
}
export default indexPage;