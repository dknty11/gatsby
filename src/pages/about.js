import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/about-css-modules.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <SEO title="About us" />
        <div className={styles.AboutContent}>
          <h3>About us</h3>
          <p>
            We're creating an environment for every one to enjoy the atmosphere.
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            title="our place"
            className={styles.iframe}
            src={
              "https://www.google.com/maps/embed/v1/place?q=place_id:EkA1IMSQxrDhu51uZyBz4buRIDg1LCBUw6JuIFF1eSwgUXXhuq1uIDcsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtIjASLgoUChIJWaBqqYQvdTERQlq1AjdTnLIQBSoUChIJN8BCWJsvdTERJloaLg0LRs8&key=" +
              `${process.env.GATSBY_GOOGLE_API}`
            }
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
