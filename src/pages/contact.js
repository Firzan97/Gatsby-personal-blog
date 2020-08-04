import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const contact = () => {
  return <Layout>
    <SEO title="Contact" description="Contact me here" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>Contact me here</h3>
        <form action="https://formspree.io/firzanazrai97@gmail.com" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control" />
            <input type="rmail" name="email" placeholder="email" className="form-control" />
            <textarea placeholder="message" name="message" rows="4" className="form-control" />
          </div>
          <button type="submit" className="submit-btn btn">Submit Here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
