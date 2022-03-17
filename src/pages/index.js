import * as React from "react"
import Layout from "../components/Layout/Layout"
import Timeline from '../images/timeline.png'


// markup
const IndexPage = () => {
  return (
    <Layout>    
      <title>Home Page</title>
      
      <img src={Timeline}/>
     
    </Layout>

  )
}

export default IndexPage
