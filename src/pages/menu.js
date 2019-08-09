import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <div style={{ marginLeft: `20px` }}>
      <SEO title="Menu" />
      <h1>Menu</h1>
      <p>To be developed</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default MenuPage
