import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }, }, }
) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Latest Post" />
    </section>
  </Layout>
}


export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        content
        id
        slug
        title
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        created_at(formatString: "MMM Do, YYYY")
        desc
      }
    }
  }
`

export default Blog
