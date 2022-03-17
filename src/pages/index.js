import * as React from "react"
import Layout from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import Timeline from '../images/timeline.png'


// markup
const IndexPage = () => {
  return (
    <Layout>    
      <title>Home Page</title>
      <ProjectCard></ProjectCard>
      <img src={Timeline}/>
     
    </Layout>

  )
}

export default IndexPage
