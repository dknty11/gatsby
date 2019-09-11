import React from "react"
import { FacebookProvider, Page } from "react-facebook"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/contact-css-modules.module.css"

const ContactPage = () => (
  <Layout>
    <div className={styles.ContactContainer}>
      <SEO title="Contact" />
      <div className={styles.ContactContent}>
        <h1>Contact</h1>
        <div style={{ height: "auto", marginBottom: "10px" }}>
          <FacebookProvider appId="392286994820189">
            <Page
              href="https://www.facebook.com/StreetBeerMD"
              tabs="timeline"
            />
          </FacebookProvider>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
