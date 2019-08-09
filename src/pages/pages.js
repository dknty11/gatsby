import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Pages = () => (
  <Layout>
    <div style={{ marginLeft: `20px` }}>
      <SEO title="Pages" />
      <h1>Pages</h1>
      <p>To be developed</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Pages
