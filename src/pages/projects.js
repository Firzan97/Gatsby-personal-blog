import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects } }
}) => {
  return <Layout>
    <SEO title="Projects" description="This is list of my projects" />
    <section className="projects-page">
      <Projects projects={projects} title="all Projects" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        github
        feature
        id
        description
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

export default ProjectsPage
