import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <div style={{ marginLeft: `20px` }}>
      <SEO title="Events" />
      <h1>Events</h1>
      <p>To be developed</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default EventsPage
