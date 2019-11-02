import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import '../components/project-card/project-card.css'
import ProjectCard from '../components/project-card/project-card'
import SearchBar from '../components/search-bar'
const ProjectPage = () => (
  <Layout>
    <SEO title="Projects | Victoire Beaufils" />
    <div className="container projects">
        <h2 className="text-center"> Projects </h2>
        <div className="col-lg-4 offset-lg-4">
           <SearchBar/>
        </div>

        <div className="row other-projects justify-content-md-center">

                <div className="col-lg-6 other-project-left">
                    <ProjectCard/>
                </div>
                <div className="col-lg-6 other-project-right">
                <ProjectCard/>
</div>

    </div>
    </div>
  </Layout>
)

export default ProjectPage;