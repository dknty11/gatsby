import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About us"></SEO>
    <h3>About us</h3>
    <p>We're creating an environment for every one to enjoy the atmosphere.</p>
    <Link to="/">Home page</Link>
  </Layout>
)

export default AboutPage