import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'



const BlogPage = ({data}) =>{
   
 
return (<Layout>
     <SEO title="Blog" />
     <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
     {/*
       {
           data.allContentfulBlogPost.edges.map((edge)=>{
return(
    <li>
        <Link to ={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
        </Link>
    </li>
           )
           })
       }*/}
  
</Layout>
    )
    
}
export default BlogPage;