import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ content, id, slug, title, category, image, desc, created_at }) => {
  return <Link to={`/blogs/${slug}`} key={id}>
    <article className="blog">
      <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{created_at}</p>
        </div>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
}

export default Blog
