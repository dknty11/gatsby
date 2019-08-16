import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import styles from "../components/pages-css-modules/about-css-modules.module.css"
import Col from "react-bootstrap/Col"

const AboutPage = () => {
  return (
    <Layout>
      <div style={{ marginLeft: `20px` }}>
        <SEO title="About us"></SEO>
        <Row>
          <Col>
            <h3>About us</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We're creating an environment for every one to enjoy the
              atmosphere.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">Home page</Link>
          </Col>
        </Row>
        <Row>
          <iframe
            title="our place"
            className={styles.iframe}
            src={
              "https://www.google.com/maps/embed/v1/place?q=place_id:EkA1IMSQxrDhu51uZyBz4buRIDg1LCBUw6JuIFF1eSwgUXXhuq1uIDcsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtIjASLgoUChIJWaBqqYQvdTERQlq1AjdTnLIQBSoUChIJN8BCWJsvdTERJloaLg0LRs8&key=" +
              `${process.env.GATSBY_GOOGLE_API}`
            }
            allowFullScreen
          ></iframe>
        </Row>
      </div>
    </Layout>
  )
}

export default AboutPage
