import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>This is about page</h2>
    <Link to="/">Home page</Link>
  </Layout>
)

export default AboutPage
