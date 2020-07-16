import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export const query1 = graphql`
  {
    allStrapiProjects(filter: {feature: {eq: true}}) {
      nodes {
        title
        github
        feature
        id
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: created_at, order: DESC}) {
      nodes {
        content
        id
        slug
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        created_at(formatString: "MMM Do, YYYY")
        desc
      }
    }
  }
`

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs } } = data

  return (<div>
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title=" projects kawe" showLink />
      <Blogs blogs={blogs} title="All Blog" showLink />
    </Layout>
  </div>)


}


