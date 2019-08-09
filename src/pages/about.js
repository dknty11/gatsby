import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import styles from "../components/about-css-modules.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About us"></SEO>
      <Row>
        <iframe
          title="our place"
          className={styles.iframe}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:EkA1IMSQxrDhu51uZyBz4buRIDg1LCBUw6JuIFF1eSwgUXXhuq1uIDcsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtIjASLgoUChIJWaBqqYQvdTERQlq1AjdTnLIQBSoUChIJN8BCWJsvdTERJloaLg0LRs8&key=AIzaSyA5pox_vGC9lCtCv9R80u80b8u7WGRdNro"
          allowFullScreen
        ></iframe>
      </Row>
      <h3>About us</h3>
      <p>
        We're creating an environment for every one to enjoy the atmosphere.
      </p>
      <Link to="/">Home page</Link>
    </Layout>
  )
}

export default AboutPage
