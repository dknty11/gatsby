import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/menu-css-modules.module.css"

const MenuPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imgStyle = {
    margin: `0 10px`,
    height: `100%`,
    width: `90%`,
    display: `inline-block`,
  }

  return (
    <Layout>
      <div className={styles.MenuContainer}>
        <SEO title="Menu" />
        <div className={styles.MenuContent}>
          <h1>Menu</h1>
          <h5>Enjoy your meal</h5>
          <Img
            style={imgStyle}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default MenuPage
