import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export const query = graphql`
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
  }
`

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects }, } = data
  return (<div>
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title=" projects kawe" showLink />
    </Layout>
  </div>)


}


