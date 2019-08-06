import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="http://themelooper.com/html/jz/images/banner-img-1.jpg" alt=""/>
    <div
      style={{
        width: `100%`,
        // marginBottom: `1.45rem`,
        position: `absolute`,
        left: 0,
        top: `250px`,
      }}
    >
    <div
      style={{
        width: `765px`,
        margin: `0 auto`,
        color: `white`,
      }}
      >
      <strong
        style={{
          font: `300 30px/30px 'Oswald', sans-serif`,
          color: `white`,
          textTransform: `uppercase`,
          display: `block`,
          textAlign: `center`
        }}
      >
      Orignal taste • since 1982
      </strong>
      <span
        style={{
          font: `400 48px 'Dancing Script', cursive`,
          display: `block`,
          textAlign: `center`,
          padding: `0 0 15px 0`,
          color: `#c5a059`
        }}
      >Premiucccxcvm Quality</span>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Link to="/about/">About us</Link>
    </div>
  </Layout>
)

export default IndexPage
