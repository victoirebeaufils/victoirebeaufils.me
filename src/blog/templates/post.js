import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../../components/layout/layout"
import "./post.css"
export default function Template({data}){
const {markdownRemark: post} = data;
//const post = data.markdownRemark;
return (
<Layout>
<h1>{post.frontmatter.title}</h1>
<h6>{post.frontmatter.date}</h6>
<h5>{post.frontmatter.description}</h5>
<div dangerouslySetInnerHTML = {{__html: post.html}}/>
</Layout>
)
}
export const postQuery = graphql`
query BlogPostByPATH($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path}}){
        html
        frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            description
        }
    }
}
`