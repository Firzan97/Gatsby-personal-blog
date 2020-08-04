import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid
const About = ({ data: { about: { nodes }, }, }) => {
  console.log(nodes)
  const { title, stack, image, description } = nodes[0]
  return <Layout>
    <SEO title="About" description="This my profile" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <h4>{description}</h4>
          <div className="about-stack" >
            {stack.map(stack => {
              return <span key={stack.id}>{stack.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout >

}


export const query = graphql`
  {
      about:allStrapiAbout {
      nodes {
      title
        description
        image {
      childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid
    }
          }
        }
        stack {
      title
          id
        }
      }
    }
  }
`


export default About
