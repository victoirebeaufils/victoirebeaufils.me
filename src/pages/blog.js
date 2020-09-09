import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout/layout"
import Img from 'gatsby-image';
import PostLink from '../components/PostLink/PostLink'
import { graphql } from "gatsby"
const BlogPage = ({ data, }) => {
    console.log(data);
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
  return (
  <Layout>{Posts}</Layout>)
}
export default BlogPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
  `