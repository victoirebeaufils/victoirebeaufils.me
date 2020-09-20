import React from "react";
import {Link} from "gatsby";
import './PostLink.css'
import Img from 'gatsby-image';
const PostLink = ({ post }) => (
    <div>
      <Link to={post.frontmatter.path}>
        <h2 style={{color: "#503c99", fontSize: 25}}>{post.frontmatter.title}</h2>
      </Link>
   
      <Img sizes ={post.frontmatter.featuredImage.childImageSharp.sizes}/>
      <i style={{color: "grey"}}>{post.frontmatter.date}</i>
      <p>
      {post.frontmatter.description}           </p>
    
 
      
    </div>
  )

  export default PostLink